import { Pane } from 'evergreen-ui'
import React from 'react'

const MainLayout = ({ children }) => {
  return (
    <Pane
      height='100%'
      width='100%'
      display='flex'
      border='default'
      flexDirection='column'
    >
      {children}
    </Pane>
  )
}

export { MainLayout }
