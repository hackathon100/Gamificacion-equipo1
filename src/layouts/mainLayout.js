import { Pane } from 'evergreen-ui'
import React from 'react'
import { ProvideDialog } from '../hooks';
import {Dialog} from '../components'

const MainLayout = ({ children }) => {
  return (
    <ProvideDialog>
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
    </ProvideDialog>
  )
}

export { MainLayout }
