import React from 'react'
import { Pane } from 'evergreen-ui'
import { Avatar, Spaceship } from '../components'

const Dashboard = () => {
  return (
    <Pane display='flex' flexDirection='column' flex={1}>
      <Pane display='flex' flexDirection='row' flex={1}>
        <Pane width='50%' height='500px' padding={16} borderRadius={3}>
          <Avatar />
        </Pane>
        <Pane width='50%' padding={16} borderRadius={3} backgroundColor='blue'>
          <div
            style={{
              height: '400px',
              backgroundColor: '#ccc',
              position: 'relative'
            }}
          />
        </Pane>
      </Pane>
      <Pane display='flex' flexDirection='row' flex={1}>
        <Pane width='50%' height='500px' padding={16} borderRadius={3}>
          <Spaceship />
        </Pane>
        <Pane
          width='50%'
          padding={16}
          borderRadius={3}
        >
          <div
            style={{
              height: 500,
              backgroundColor: '#ccc',
              position: 'relative'
            }}
          />
        </Pane>
      </Pane>
    </Pane>
  )
}

export { Dashboard }
