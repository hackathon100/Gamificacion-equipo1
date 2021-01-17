import React from 'react';
import Box from "ui-box";
import {
  Heading, Button
} from "evergreen-ui";


const UseItem = (props) => {
  const onClick = () => {
    props.onClick()
    props.closeDialog();
  }
  return (
    <Box>
      <Heading size={100} marginTop="default">Seguro que quieres usar este item?</Heading>
      <Box margin={10} display="flex" flex={1} flexDirection='row' justifyContent='space-between' >
        <Button appearance="warning" onClick={props.closeDialog}>No</Button>
        <Button intent="primary" onClick={onClick}>Si</Button>
      </Box>
    </Box >
  )
}

export { UseItem }