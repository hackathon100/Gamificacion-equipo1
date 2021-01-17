import React from 'react'
import { Dialog as EDialog } from 'evergreen-ui'
import { useDialog } from '../hooks'
import { SignOut, Teams, SendLink, TeacherLogin, Buy } from '../dialogs'

const dialogs = {
  signOut: SignOut,
  selectTeam: Teams,
  SEND_LINK: SendLink,
  TEACH_LOGIN: TeacherLogin,
  BUY: Buy
}

const dumbComp = () => <div />

const Dialog = () => {
  const { isOpen, closeDialog, props, current } = useDialog()
  const OpenDialog = dialogs[current] || dumbComp
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
