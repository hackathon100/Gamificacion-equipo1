import React, { useState, useEffect } from 'react'
import { db } from '../index'
import 'firebase/firestore'
import firebase from 'firebase/app'
import { useTeam } from './'

const useTasks = () => {
  const { team } = useTeam()
  const [tasks, setTasks] = useState([])

  useEffect(() => {
    const tasksCollection = db.collection('tasks')
    const tasksConextion = tasksCollection.onSnapshot(async tasks => {
      const data = await Promise.all(
        tasks.docs.map(async task => {
          return { ...task.data(), id: task.id }
        })
      )
      setTasks(data.filter(task => task.available))
    })
    return () => {
      tasksConextion()
    }
  }, [])
  return {
    tasks
  }
}

export { useTasks }
