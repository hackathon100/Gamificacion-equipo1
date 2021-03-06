import React, { useEffect, useState } from 'react'
import Box from 'ui-box'
import { db } from '../index'
import { Heading } from 'evergreen-ui'
import 'firebase/firestore'

const Timer = () => {
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
    return () => clearInterval(interval);
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

  return (
    <Box
      position='absolute'
      margin='auto'
      left={0}
      right={0}
      top={10}
      width={150}
      height={35}
      backgroundColor='black'
      display='flex'
      justifyContent='center'
      borderRadius={50}
    >
      <Heading size={800}>{timeLeft}</Heading>
    </Box>
  )
}

export { Timer }
