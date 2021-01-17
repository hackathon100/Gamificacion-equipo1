import React from 'react'
import Box from 'ui-box'
import { Heading, Button, Paragraph, Link } from 'evergreen-ui'
import { useAuth, useTasks } from '../hooks'

const SendLink = props => {
  const auth = useAuth()
  const { updateLink } = useTasks()
  console.log(auth)
  const onClick = () => {
    updateLink(props.newLink)
    props.onClose()
    props.closeDialog()
  }
  return (
    <Box>
      <Heading size={100} marginTop='default'>
        Estas seguro que quieres Finalizar Y enviar tu trabajo?
      </Heading>
      <Box display='flex' flexDirection='row'>
        <Paragraph>Tu link a las respuestas es: </Paragraph>
        <Link href={props.newLink}>{` ${props.newLink}`}</Link>
      </Box>
      <Box
        margin={10}
        display='flex'
        flex={1}
        flexDirection='row'
        justifyContent='space-between'
      >
        <Button appearance='primary' onClick={props.closeDialog}>
          No
        </Button>
        <Button intent='warning' onClick={onClick}>
          Si
        </Button>
      </Box>
    </Box>
  )
}

export { SendLink }
