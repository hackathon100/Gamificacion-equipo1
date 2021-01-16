import React, { useEffect, useState } from 'react'
import Box from 'ui-box'
import { Heading, Button, Select } from 'evergreen-ui'
import { useTeam } from '../hooks'

const Teams = props => {
  const [teamSelected, setSelectedTeam] = useState(null)
  const { teams, getTeams, saveTeamSelected } = useTeam()
  useEffect(() => {
    getTeams()
  }, [])
  const onClick = () => saveTeamSelected(teamSelected)
  return (
    <Box display='flex' flexDirection='column'>
      <Heading size={100} marginTop='default'>
        Selecciona tu equipo
      </Heading>
      <Select flex={1} onChange={event => setSelectedTeam(event.target.value)}>
        <option hidden={true}>Selecciona tu equipo</option>
        {teams.map(team => (
          <option
            key={team.id}
            value={team.id}
            defaultValue={team.id === teamSelected}
          >
            {team.name}
          </option>
        ))}
      </Select>
      <Box
        margin={10}
        display='flex'
        flex={1}
        flexDirection='row'
        justifyContent='flex-end'
      >
        <Button disabled={!teamSelected} intent='success' onClick={onClick}>
          Guardar
        </Button>
      </Box>
    </Box>
  )
}

export { Teams }
