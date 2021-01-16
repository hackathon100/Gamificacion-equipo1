import React from 'react'
import Box from 'ui-box'
import { Rocket, Crew, Tasks, Timer } from '../components'

const Experiment = () => {
  return (
    <Box>
      <Timer />
      <Rocket />
      <Crew />
      <Tasks />
    </Box>
  )
}

export { Experiment }
