import React from 'react'
import { Pane } from 'evergreen-ui'
import { Avatar, Spaceship, Missions, Progress } from '../components'

const Dashboard = () => {
  return (
    <Pane display='flex' flexDirection='column' flex={1}>
      <Pane display='flex' flexDirection='row' flex={1}>
        <Pane width='600px' height='400px' padding={16} borderRadius={3}>
          <Avatar />
        </Pane>
        <Pane width='600px' height='400px' padding={16} borderRadius={3}>
          <Missions />
        </Pane>
      </Pane>
      <Pane display='flex' flexDirection='row' flex={1}>
        <Pane width='600px' height='400px' padding={16} borderRadius={3}>
          <Spaceship />
        </Pane>
        <Pane width='600px' height='400px' padding={16} borderRadius={3}>
          <Progress />
        </Pane>
      </Pane>
    </Pane>
  )
}

export { Dashboard }
