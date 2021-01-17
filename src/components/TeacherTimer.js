import React, { useEffect, useState } from 'react'
import Box from 'ui-box'
import { db } from '../index'
import { Heading, Button } from 'evergreen-ui'
import firebase from 'firebase/app'
import 'firebase/firestore'

const TeacherTimer = () => {
  const [timeLeft, setTimeLeft] = useState()
  const [expirationDate, setExpirationDate] = useState()
  const [pause, setPause] = useState(true)

  useEffect(() => {
    let interval = null
    if (!pause && expirationDate.getTime()) {
      const countDownDate = expirationDate.getTime()
      interval = setInterval(() => {
        let now = new Date().getTime()
        let distance = countDownDate - now
        let hours = Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        )
        let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
        let seconds = Math.floor((distance % (1000 * 60)) / 1000)
        setTimeLeft(`${hours} : ${minutes} : ${seconds}`)
        if (distance < 0 || pause) {
          clearInterval(interval)
          //time is over
        }
      }, 1000)
    }
    return () => clearInterval(interval)
  }, [expirationDate, pause])

  useEffect(() => {
    const paramsCollection = db.collection('params')
    const paramsConextion = paramsCollection
      .doc('class_timer')
      .onSnapshot(async expiration => {
        if (expiration.data()) {
          setExpirationDate(expiration.data().expirationDate.toDate())
          setPause(expiration.data().active)
        }
      })
    return () => {
      paramsConextion()
    }
  }, [])

  const handlePlayPause = async () => {
    await db
      .collection('params')
      .doc('class_timer')
      .update({
        active: !pause
      })
  }

  return (
    <Box
      display='flex'
      width='350px'
      flexDirection='row'
      flex={1}
      alignItems='center'
      justifyContent='space-around'
    >
      <Heading size='500' color='white'>
        {timeLeft}
      </Heading>
      <Button onClick={handlePlayPause}>{pause ? 'Comenzar' : 'Pausar'}</Button>
      <Button>Editar</Button>
    </Box>
  )
}

export { TeacherTimer }
