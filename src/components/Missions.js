import React from 'react'
import { Pane, Heading } from 'evergreen-ui'

const Missions = () => {
  return (
    <Pane
      borderRadius={10}
      padding={10}
      width=''
      height={400}
      backgroundColor='#ccc'
    >
      <Pane>
        <Heading size={600} marginTop='default'>
          Misiones
        </Heading>
      </Pane>
    </Pane>
  )
}

export { Missions }
