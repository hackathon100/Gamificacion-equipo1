import React, { createContext, useContext, useState, useEffect } from 'react'
import 'firebase/auth'
import { db } from '../index'
import { useDialog, useAuth } from './'

const TeamContext = createContext()

const useProvideTeam = () => {
  const [loading, setLoading] = useState(false)
  const [team, setTeam] = useState(null)
  const [error, setError] = useState(null)
  const { openDialog, closeDialog } = useDialog()
  const { user } = useAuth()
  const [teams, setTeams] = useState([])
  useEffect(() => {
    let teamConextion = () => {}
    if (user) {
      const teamCollection = db.collection('teams').doc(user.teamId)
      teamConextion = teamCollection.onSnapshot(team => {
        if (team.data()) {
          setTeam({ ...team.data() })
        }
      })
    }
    return () => {
      teamConextion()
    }
  }, [user])

  const getTeams = async () => {
    const teamsCollection = await db.collection('teams').get()
    const teams = await Promise.all(
      teamsCollection.docs.map(async doc => {
        return { ...doc.data() }
      })
    )
    setTeams(teams)
  }

  return {
    team,
    teams,
    getTeams,
    loading
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
