import React, { useEffect, useState } from 'react'
import Box from 'ui-box'
import { db } from '../index'
import { Heading } from 'evergreen-ui'
import 'firebase/firestore'

const Timer = () => {
  const [timeLeft, setTimeLeft] = useState()

  useEffect(() => {
    const paramsCollection = db.collection('params')
    const paramsConextion = paramsCollection
      .doc('class_timer')
      .onSnapshot(async expiration => {
        if (expiration.data()) {
          const countDownDate = expiration
            .data()
            .expirationDate.toDate()
            .getTime()
          var x = setInterval(() => {
            var now = new Date().getTime()
            var distance = countDownDate - now
            var hours = Math.floor(
              (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
            )
            var minutes = Math.floor(
              (distance % (1000 * 60 * 60)) / (1000 * 60)
            )
            var seconds = Math.floor((distance % (1000 * 60)) / 1000)
            setTimeLeft(`${hours} : ${minutes} : ${seconds}`)
            if (distance < 0) {
              clearInterval(x)
              //time is over
            }
          }, 1000)
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
