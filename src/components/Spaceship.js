import React from 'react'
import { Pane } from 'evergreen-ui'

const Spaceship = () => {
  return (
    <Pane display='flex' flexDirection='row'>
      <Pane flex={1}>
        <img
          style={{ height: 400, width: 400 }}
          src='./images/avatar/spaceship.png'
          alt='avatar'
        />
      </Pane>
      <Pane flex={1} height={400} backgroundColor='#ccc'></Pane>
    </Pane>
  )
}

export { Spaceship }
