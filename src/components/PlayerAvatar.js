import React from 'react'
import { Avatar, Heading } from 'evergreen-ui'
import Box from 'ui-box'

const PlayerAvatar = ({name, photo, uid}) => {
  return (
    <Box
      display='flex'
      flexDirection='row'
      alignItems='center'
      cursor='pointer'
      key={uid}
    >
      <Avatar src={photo} name={name} size={40} />
      <Heading size={200} marginLeft={10} color="white">
        {name}
      </Heading>
    </Box>
  )
}

export { PlayerAvatar }
