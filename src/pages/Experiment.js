import React from 'react'
import Box from 'ui-box'
import { Rocket, Crew, Tasks, Timer, Store, Inventory } from '../components'

const Experiment = () => {
  return (
    <Box>
      <Timer />
      <Rocket />
      <Crew />
      <Tasks />
      <Store />
      <Inventory />
    </Box>
  )
}

export { Experiment }
