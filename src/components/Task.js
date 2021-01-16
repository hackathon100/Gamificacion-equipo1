import React from 'react'
import { Heading, Badge, Paragraph } from 'evergreen-ui'
import Box from 'ui-box'
import { useTeam } from '../hooks'
import { get } from 'lodash'

const Task = ({ title, status, type, description }) => {
  const { team } = useTeam()
  const players = get(team, 'players') || []
  return (
    <Box display='flex' flexDirection='column' margin={10}>
      <Box display='flex' flexDirection='row' justifyContent='space-between'>
        <Heading size={200} color='white'>
          {title}{' '}
        </Heading>
      </Box>
      <Paragraph>{description}</Paragraph>
      {players.map(player => (
        <Badge
          key={`completedBy-${player.uid}`}
          color={false ? 'green' : 'blue'}
        >
          {player.displayName}
        </Badge>
      ))}
    </Box>
  )
}

export { Task }
