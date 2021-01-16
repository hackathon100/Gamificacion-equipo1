import React from 'react'
import { Pane, Heading } from 'evergreen-ui'

const Progress = () => {
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
          Progreso
        </Heading>
      </Pane>
    </Pane>
  )
}

export { Progress }
