import React, { useEffect } from 'react'
import Box from 'ui-box'
import { Heading, Button } from 'evergreen-ui'
import { useTeam } from '../hooks'

const Teams = props => {
  const onClick = () => {}
  const { teams, getTeams } = useTeam()
  useEffect(() => {
    getTeams()
  }, [])
  console.log(teams)
  return (
    <Box>
      <Heading size={100} marginTop='default'>
        Selecciona tu equipo
      </Heading>
      <Box
        margin={10}
        display='flex'
        flex={1}
        flexDirection='row'
        justifyContent='space-between'
      >
        <Button intent='warning' onClick={onClick}>
          Si
        </Button>
      </Box>
    </Box>
  )
}

export { Teams }
