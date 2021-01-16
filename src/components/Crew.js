import React from 'react'
import { Heading, Pane } from 'evergreen-ui'
import { useTeam } from '../hooks'
import { PlayerAvatar } from './'
import { get } from 'lodash'

import Box from 'ui-box'
const Crew = () => {
  const { team } = useTeam();
  const players = get(team, 'players') || []
  return (
    <Pane
      position='absolute'
      left={10}
      top={10}
      width={350}
      height={400}
      backgroundColor='darkgray'
      borderRadius={10}
      padding={10}
    >
      <Heading size={800}>Tripulantes</Heading>
      <Heading size={600}>({get(team, 'name')})</Heading>
      <Box
        width='90%'
        alignSelf='center'
        margin={10}
        borderBottom='lightgrey 2px solid'
      />
      <Box display='flex' flexDirection='column'>
        {players.map(player => (
          <PlayerAvatar
            key={player.uid}
            name={player.displayName}
            uid={player.uid}
            photo={player.photoURL}
          />
        ))}
      </Box>
    </Pane>
  )
}

export { Crew }
