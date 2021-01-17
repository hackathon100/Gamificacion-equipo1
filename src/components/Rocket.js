import React from 'react'
import Box from 'ui-box'
import { COLORS } from './'
import { useTeam } from '../hooks'
import { get } from 'lodash'

const Rocket = () => {
  const { team } = useTeam()
  const teamColor = get(team, 'spaceship.color')
  const colors = get(COLORS, `${teamColor}.details`) || COLORS['COLOR_BASE'].details
  return (
    <Box className='rocket' cursor='pointer'>
      <Box className='rocket-body'>
        <Box
          backgroundColor={colors.body}
          borderTopColor={colors.borders}
          borderTopWidth='5px'
          borderTopStyle='solid'
          className='body'
        />
        <Box className='fin fin-left' backgroundColor={colors.fin} />
        <Box className='fin fin-right' backgroundColor={colors.fin} />
        <Box
          className='window'
          backgroundColor={colors.window}
          borderWidth='5px'
          borderStyle='solid'
          borderColor={colors.borders}
        />
      </Box>
      <Box className='exhaust-flame' />
      <Box is='ul' className='exhaust-fumes'>
        <Box is='li' />
        <Box is='li' />
        <Box is='li' />
        <Box is='li' />
        <Box is='li' />
        <Box is='li' />
        <Box is='li' />
        <Box is='li' />
        <Box is='li' />
      </Box>
      <Box is='ul' className='star'>
        <Box is='li' />
        <Box is='li' />
        <Box is='li' />
        <Box is='li' />
        <Box is='li' />
        <Box is='li' />
        <Box is='li' />
      </Box>
    </Box>
  )
}

export { Rocket }
