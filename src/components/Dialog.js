import React from 'react'
import { Dialog as EDialog } from 'evergreen-ui'
import { useDialog } from '../hooks'
import { SignOut, Teams, SendLink } from '../dialogs'

const COMP = props => <div>{props.text}</div>

const dialogs = {
  signOut: SignOut,
  selectTeam: Teams,
  SEND_LINK: SendLink,
}

const dumbComp = () => <div />

const Dialog = () => {
  const { isOpen, closeDialog, props, current } = useDialog()
  const OpenDialog = dialogs[current] || dumbComp
  console.log('props', props)
  return (
    <EDialog
      onCancel={closeDialog}
      onCloseComplete={closeDialog}
      isShown={isOpen}
      hasFooter={false}
      hasHeader={false}
      //this should be dialog props
      {...props}
    >
      <OpenDialog {...props} closeDialog={closeDialog} />
    </EDialog>
  )
}

export { Dialog }
