import { Pane } from 'evergreen-ui'
import React from 'react'
import { Dialog } from '../components'

const MainLayout = ({ children }) => {
  return (
    <Pane
      height='100%'
      width='100%'
      display='flex'
      border='default'
      flexDirection='column'
    >
      <Dialog />
      {children}
    </Pane>
  )
}

export { MainLayout }
