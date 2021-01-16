import React from 'react'
import Box from 'ui-box'
import { Rocket, Crew, Tasks } from '../components'
import { Heading, Pane } from 'evergreen-ui'

const Experiment = () => {
  return (
    <Box>
      <Rocket />
      <Crew />
      <Tasks />
    </Box>
  )
}

export { Experiment }
