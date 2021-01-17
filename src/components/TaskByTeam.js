import React, { useState } from 'react'
import Box from 'ui-box'
import { useTeacher } from '../hooks'
import { Heading, Link, Paragraph, Select, Button, Avatar } from 'evergreen-ui'
import { get } from 'lodash'

const Team = team => {
  const getLink = id => {
    return get(team, `links.${id}`) || false
  }
  const { addPoints } = useTeacher()
  const [points, setPoints] = useState(0)
  const [calificated, setCalificated] = useState({})
  const givePoints = player => {
    addPoints(points, player)
    setCalificated(prev => ({ ...prev, [player.id]: true }))
  }
  return (
    <Box
      height='220px'
      padding={5}
      margin={10}
      border='2px solid #ccc'
      borderRadius='10px'
    >
      <Box display='flex' flexDirection='row' justifyContent='space-between'>
        <Heading size={600}>{team.name}</Heading>
      </Box>
      <Box display='flex' flexDirection='row'>
        {team.playersData.map(player => (
          <Box
            key={player.id}
            display='flex'
            flexDirection='column'
            alignItems='center'
            margin={10}
            padding={5}
            border='2px solid #ccc'
            borderRadius='10px'
          >
            <Avatar name={player.displayName} src={player.photoURL} size={40} />
            <Heading>{player.displayName}</Heading>
            {getLink(player.id) ? (
              <Link href={getLink(player.id)}>ver documento</Link>
            ) : (
              <Paragraph>Trabajando</Paragraph>
            )}
            <Select
              onChange={event => setPoints(event.target.value)}
              marginBottom={3}
            >
              <option hidden>puntos</option>
              <option value={0}>0</option>
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
              <option value={5}>5</option>
            </Select>
            <Button
              disabled={calificated[player.id] || !points}
              onClick={() => givePoints(player)}
            >
              Calificar
            </Button>
          </Box>
        ))}
      </Box>
    </Box>
  )
}

const TaskByTeam = ({ taskId }) => {
  const { tasks, teams } = useTeacher()
  return (
    <Box display='flex' flexDirection='column'>
      {teams
        .filter(team => team.playersData.length)
        .map(team => (
          <Team key={team.id} {...team} />
        ))}
    </Box>
  )
}

export { TaskByTeam }
