import React from 'react'
import Box from 'ui-box'


const COLOR_OPTIONS = {
  basic : {
    fin: "#a75248",
    body: "#dadada",
    window: "#a75248",
    borders: "#554842"
  },
  blue : {
    fin: "blue",
    body: "lightblue",
    window: "blue",
    borders: "#554842"
  }
}


const Rocket = () => {
  const colors = COLOR_OPTIONS.basic
  return (
    <Box className='rocket' cursor="pointer">
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
        <Box className='window' backgroundColor={colors.window} borderWidth="5px" borderStyle="solid" borderColor={colors.borders}/>
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
