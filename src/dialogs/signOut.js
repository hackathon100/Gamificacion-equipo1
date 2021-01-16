import React from 'react';
import Box from "ui-box";
import {
  Heading, Button
} from "evergreen-ui";
import { useAuth } from "../hooks";

const SignOut = (props) => {
  const auth = useAuth();
  console.log(auth)
  const onSignOut = () => {
    auth.signout();
    props.closeDialog();
  }
  return (
    <Box>
      <Heading size={100} marginTop="default">Seguro que quieres cerrar sesión?</Heading>
      <Box margin={10} display="flex" flex={1} flexDirection='row' justifyContent='space-between' >
        <Button appearance="primary" onClick={props.closeDialog}>No</Button>
        <Button intent="warning" onClick={onSignOut}>Si</Button>
      </Box>
    </Box >
  )
}

export { SignOut }