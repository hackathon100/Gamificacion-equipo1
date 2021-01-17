import React, { useState, useEffect } from 'react'
import { db } from '../index'
import 'firebase/firestore'
import firebase from 'firebase/app'
import { useAuth } from './'

const useTasks = () => {
  const [tasks, setTasks] = useState([])
  const { player, user } = useAuth()
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
  const updateTask = async (taskId, value) => {
    const tasksCollection = db
      .collection('teams')
      .doc(player.teamId)
      .collection('tasks')
      .doc(taskId)
    const exist = await tasksCollection.get().then(resp => resp.exists)
    if (value && exist) {
      tasksCollection.update({
        completedBy: firebase.firestore.FieldValue.arrayUnion(
          db.collection('players').doc(user.uid)
        )
      })
    } else if (value && !exist) {
      tasksCollection.set({
        completedBy: firebase.firestore.FieldValue.arrayUnion(
          db.collection('players').doc(user.uid)
        )
      })
    } else {
      tasksCollection.update({
        completedBy: firebase.firestore.FieldValue.arrayRemove(
          db.collection('players').doc(user.uid)
        )
      })
    }
  }

  const updateLink = async link => {
    let links = {}
    links.[user.uid] = link;
    await db.collection('teams')
      .doc(player.teamId)
      .update({[`links.${user.uid}`]: link})
  }

  return {
    tasks,
    updateLink,
    updateTask
  }
}

export { useTasks }
