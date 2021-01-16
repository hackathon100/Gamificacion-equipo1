import React from 'react'
import { Pane, Avatar as UserAvatar, Text, SelectMenu, Position } from "evergreen-ui";
import { useAuth, useDialog } from "../hooks";
import Box from "ui-box";

const Avatar = () => {
  const { user } = useAuth();
  const { openDialog } = useDialog();
  const onSingOut = () => {
    openDialog('signOut');
  }
  const handleMenuOptions = (item) => {
    switch (item.value) {
      case 'singout':
        return onSingOut();
      default:
        break;
    }
  }
  return (
    <Pane display='flex' flexDirection='row'>
      <Pane flex={1}>
        <img
          style={{ height: 400, width: 400 }}
          src='./images/avatar/rojo.png'
          alt='avatar'
        />
      </Pane>
      <Pane padding={10} width="200px" height={400} backgroundColor='#ccc'>
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
            <Text marginLeft={10} size={300}>
              {user.displayName}
            </Text>
          </Box>
        </SelectMenu>
      </Pane>
    </Pane>
  )
}

export { Avatar }
