import React from 'react'
import { Heading, Pane } from 'evergreen-ui'
import { useAuth, useStore, useDialog } from '../hooks'
import { get } from 'lodash'
import Box from 'ui-box'

const COLORS = {
  COLOR_BASE: {
    name: 'Color Rojo',
    color: 'red'
  },
  COLOR_BASE_1: {
    name: 'Color Verde',
    color: 'green'
  },
  COLOR_BASE_2: {
    name: 'Color Azul',
    color: 'blue'
  },
  COLOR_BASE_3: {
    name: 'Color Negro',
    color: 'black'
  }
}

const items = item => {
  switch (item.type) {
    case 'SPACESHIP':
      return (
        <Box
          width='60px'
          height='60px'
          border='4px solid #111111'
          borderRadius={10}
          flex={1}
          display='flex'
          justifyContent='center'
          alignItems='center'
        >
          <Box
            position='absolute'
            width='45px'
            height='45px'
            backgroundColor={get(COLORS, `${[item.code]}.color`)}
            borderRadius={10}
          />
        </Box>
      )
    case 'SCHOOL_POINTS':
      return (
        <Box
          width='60px'
          height='60px'
          border='4px solid #111111'
          borderRadius={10}
          flex={1}
          display='flex'
          justifyContent='center'
          alignItems='center'
        >
          <Box
            position='absolute'
            width='45px'
            height='45px'
            backgroundColor='green'
            borderRadius={10}
          />
        </Box>
      )
    default:
      break
  }
}

const RenderItem = ({ item }) => {
  const { openDialog } = useDialog()
  const { player } = useAuth()
  const { buy } = useStore()
  const onClick = () => buy({ item })
  const onBuy = () => {
    get(player, 'points') && openDialog('BUY', { onClick })
  }
  return (
    <Box marginBottom='10px' cursor='pointer' onClick={onBuy}>
      {items(item)}{' '}
      <Heading size={400}>{get(COLORS, `${[item.code]}.name`)}</Heading>
      <Heading size={200}>{`${item.price} puntos`}</Heading>
    </Box>
  )
}

const Store = () => {
  const { player } = useAuth()
  const { storeData } = useStore()
  console.log(storeData)
  return (
    <Pane
      position='absolute'
      left={10}
      bottom={10}
      width={350}
      height={400}
      backgroundColor='darkgray'
      borderRadius={10}
      padding={10}
    >
      <Heading size={800}>Tienda</Heading>
      <Heading size={600}>({get(player, 'points')} puntos)</Heading>
      <Box
        width='90%'
        alignSelf='center'
        margin={10}
        borderBottom='lightgrey 2px solid'
      />
      <Box display='grid' gridTemplateColumns='repeat(3, 1fr)' gap='10px'>
        {storeData.map(item => (
          <RenderItem key={item.id} item={item} />
        ))}
      </Box>
    </Pane>
  )
}

export { Store }
