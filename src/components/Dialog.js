import React from 'react'
import { Dialog as EDialog } from 'evergreen-ui'
import { useDialog } from '../hooks'
import { SignOut } from '../dialogs'


const COMP = props => <div>{props.text}</div>

const dialogs = {
  signOut: SignOut
}

const dumbComp = () => <div />

const Dialog = () => {
  const { isOpen, closeDialog, props, current } = useDialog()
  const OpenDialog = dialogs[current] || dumbComp
  return (
    <EDialog
      hasClose
      onCancel={closeDialog}
      onCloseComplete={closeDialog}
      isShown={isOpen}
      hasFooter={false}
      hasHeader={false}
    >
      <OpenDialog {...props} closeDialog={closeDialog} />
    </EDialog>
  )
}

export { Dialog }
