import { useState, useEffect } from 'react'
import { db } from '../index'
import 'firebase/firestore'
import firebase from 'firebase/app'
import { useAuth } from './'

const useStore = () => {
  const [storeData, setStoreData] = useState([])
  const { player } = useAuth()

  const fetchStore = async () => {
    const storeCollection = await db.collection('store').get()
    const storeItems = await Promise.all(
      storeCollection.docs.map(async doc => {
        return { ...doc.data(), id: doc.id }
      })
    )
    setStoreData(storeItems)
  }

  useEffect(() => {
    fetchStore()
  }, [player])

  const useNewColor = async code => {
    return await db
      .collection('teams')
      .doc(player.teamId)
      .update({
        [`spaceship.color`]: code
      })
  }

  const addPoints = async (points, player) => {
    await db
      .collection('players')
      .doc(player.id)
      .update({
        points: firebase.firestore.FieldValue.increment(points)
      })
  }

  const buy = async ({ item }) => {
    await db
      .collection('players')
      .doc(player.uid)
      .update({
        [`inventory.${item.id}.count`]: firebase.firestore.FieldValue.increment(
          1
        )
      })
    await db
      .collection('players')
      .doc(player.uid)
      .update({
        points: firebase.firestore.FieldValue.increment(-item.price)
      })
  }

  const getItem = id => {
    return storeData.filter(item => item.id === id)[0]
  }

  return {
    storeData,
    useNewColor,
    buy,
    addPoints,
    getItem
  }
}

export { useStore }
