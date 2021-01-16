import React from 'react'
import { Pane, Heading } from 'evergreen-ui'

const Spaceship = () => {
  return (
    <Pane display='flex' flexDirection='row'>
      <Pane className='spaceship'>
        <img
          style={{ height: 400, width: 400 }}
          src='./images/avatar/spaceship.png'
          alt='avatar'
        />
      </Pane>
      <Pane
        borderRadius={10}
        padding={10}
        width='200px'
        height={400}
        backgroundColor='#ccc'
      >
        <Pane>
          <Heading size={600} marginTop='default'>
            Especificaciones
          </Heading>
        </Pane>
      </Pane>
    </Pane>
  )
}

export { Spaceship }
