import React from 'react';
import Box from "ui-box";
import {
  Heading, Button
} from "evergreen-ui";

const Buy = (props) => {
  const onClick = () => {
    props.onClick();
    props.closeDialog();
  }
  return (
    <Box>
      <Heading size={100} marginTop="default">Seguro que quieres comprar este item?</Heading>
      <Box margin={10} display="flex" flex={1} flexDirection='row' justifyContent='space-between' >
        <Button appearance="primary" onClick={props.closeDialog}>No</Button>
        <Button intent="warning" onClick={onClick}>Si</Button>
      </Box>
    </Box >
  )
}

export { Buy }