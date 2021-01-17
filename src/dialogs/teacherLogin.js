import React, { useState } from 'react'
import Box from 'ui-box'
import { Heading, Button, TextInput } from 'evergreen-ui'
import { useAuth } from '../hooks'

const MASTER_PASSWORD = '123123'

const TeacherLogin = props => {
  const { signin } = useAuth()
  const onLogin = () => {
    signin({ teacher: true });
    props.closeDialog()
  }
  const [password, setPassword] = useState('')
  return (
    <Box>
      <Heading size={100} marginTop='default'>
        Bienvenido Profesor!
      </Heading>
      <TextInput
        flex={1}
        type='password'
        name='text-input-name'
        placeholder='Para continuar necesitas la contraseña maestra'
        value={password}
        onChange={e => setPassword(e.target.value)}
      />
      <Box
        margin={10}
        display='flex'
        flex={1}
        flexDirection='row'
        justifyContent='space-between'
      >
        <Button appearance='warning' onClick={props.closeDialog}>
          Cerrar
        </Button>
        <Button
          intent='success'
          disabled={MASTER_PASSWORD !== password}
          onClick={onLogin}
        >
          Iniciar sesion
        </Button>
      </Box>
    </Box>
  )
}

export { TeacherLogin }
