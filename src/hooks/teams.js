import React, { createContext, useContext, useState, useEffect } from 'react'
import { db } from '../index'
import { useDialog, useAuth } from './'
import 'firebase/firestore'
import firebase from 'firebase/app'

const TeamContext = createContext()

const useProvideTeam = () => {
  const [loading, setLoading] = useState(false)
  const [team, setTeam] = useState(null)
  const [error, setError] = useState(null)
  const { openDialog, closeDialog } = useDialog()
  const { player, user } = useAuth()
  const [teams, setTeams] = useState([])

  useEffect(() => {
    let teamConextion = () => {}
    if (player) {
      const teamCollection = db.collection('teams').doc(player.teamId)
      teamConextion = teamCollection.onSnapshot(async team => {
        if (team.data()) {
          let players = await Promise.all(
            team.data().players.map(data => {
              return data
                .get()
                .then(player => ({ ...player.data(), uid: player.id }))
            })
          )
          setTeam({ ...team.data(), players })
        }
      })
    }
    return () => {
      teamConextion()
    }
  }, [player])

  const getTeams = async () => {
    const teamsCollection = await db.collection('teams').get()
    const teams = await Promise.all(
      teamsCollection.docs.map(async doc => {
        return { ...doc.data(), id: doc.id }
      })
    )
    setTeams(teams)
  }

  const saveTeamSelected = async teamSelected => {
    await db
      .collection('players')
      .doc(user.uid)
      .update({ teamId: teamSelected })
    await db
      .collection('teams')
      .doc(teamSelected)
      .update({
        players: firebase.firestore.FieldValue.arrayUnion(
          db.collection('players').doc(user.uid)
        )
      })
    closeDialog()
  }

  const updateTasks = async taskId => {
    await db
      .collection('teams')
      .doc(player.teamId)
      .collection('tasks')
      .doc(taskId)
      .update({
        completedBy: firebase.firestore.FieldValue.arrayUnion(
          db.collection('players').doc(user.uid)
        )
      })
      .update({
        players: firebase.firestore.FieldValue.arrayUnion(
          db.collection('players').doc(user.uid)
        )
      })
  }

  return {
    team,
    teams,
    getTeams,
    loading,
    saveTeamSelected,
    updateTasks
  }
}

const ProvideTeam = ({ children }) => {
  const team = useProvideTeam()
  return <TeamContext.Provider value={team}>{children}</TeamContext.Provider>
}

const useTeam = () => {
  return useContext(TeamContext)
}

export { useProvideTeam, ProvideTeam, useTeam }
