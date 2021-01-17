import React, { useState, useEffect } from 'react'
import { db } from '../index'
import 'firebase/firestore'
import firebase from 'firebase/app'
import { useAuth } from './'

const useTeacher = () => {
  const [tasks, setTasks] = useState([])
  const [teams, setTeams] = useState([])
  const { user } = useAuth()
  useEffect(() => {
    const tasksCollection = db.collection('tasks')
    const tasksConextion = tasksCollection.onSnapshot(async tasks => {
      const data = await Promise.all(
        tasks.docs.map(async task => {
          return { ...task.data(), id: task.id }
        })
      )
      setTasks(data)
    })
    return () => {
      tasksConextion()
    }
  }, [])

  useEffect(() => {
    const teamCollection = db.collection('teams').onSnapshot(async teams => {
      const data = await Promise.all(
        teams.docs.map(async team => {
          const playersData = await Promise.all(
            await team.data().players.map(async player => {
              const data = await player.get()
              return { ...data.data(), id: player.id }
            })
          )
          return { playersData, ...team.data() }
        })
      )
      setTeams(data)
    })
  }, [])

  const addPoints = async (points, player) => {
    await db
      .collection('players')
      .doc(player.id)
      .update({
        points: firebase.firestore.FieldValue.increment(points)
      })
  }

  return {
    tasks,
    teams,
    addPoints
  }
}

export { useTeacher }
