import React from 'react'
import {
  Avatar as UserAvatar,
  SelectMenu,
  Position,
  Heading
} from 'evergreen-ui'
import { useAuth, useDialog } from '../hooks'
import Box from 'ui-box'

const Avatar = () => {
  const { user } = useAuth()
  const { openDialog } = useDialog()
  const onSingOut = () => {
    openDialog('signOut')
  }
  const handleMenuOptions = item => {
    switch (item.value) {
      case 'singout':
        return onSingOut()
      default:
        break
    }
  }
  return (
    <SelectMenu
      position={Position.BOTTOM}
      title='Opciones'
      options={[{ value: 'singout', label: 'Cerrar Sesion' }]}
      onSelect={handleMenuOptions}
      hasFilter={false}
      height={100}
    >
      <Box
        display='flex'
        flexDirection='row'
        alignItems='center'
        cursor='pointer'
      >
        <UserAvatar src={user.photoURL} name={user.displayName} size={40} />
        <Heading size={200} marginLeft={10}>
          {user.displayName}
        </Heading>
      </Box>
    </SelectMenu>
  )
}

export { Avatar }
