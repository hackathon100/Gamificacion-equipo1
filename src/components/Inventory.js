import React from 'react'
import { Heading, Pane } from 'evergreen-ui'
import { useAuth, useStore, useDialog } from '../hooks'
import { get } from 'lodash'
import Box from 'ui-box'
import { db } from '../index'

export const COLORS = {
  COLOR_BASE: {
    name: 'Color Rojo',
    color: 'red',
    details: {
      fin: '#a75248',
      body: '#dadada',
      window: '#a75248',
      borders: '#554842'
    }
  },
  COLOR_BASE_1: {
    name: 'Color Verde',
    color: 'green',
    details: {
      fin: 'green',
      body: '#dadada',
      window: 'lighgreen',
      borders: '#554842'
    }
  },
  COLOR_BASE_2: {
    name: 'Color Azul',
    color: 'blue',
    details: {
      fin: 'blue',
      body: 'lightgray',
      window: 'lightblue',
      borders: '#554842'
    }
  },
  COLOR_BASE_3: {
    name: 'Color Negro',
    color: 'black',
    details: {
      fin: 'black',
      body: '#dadada',
      window: '#a75248',
      borders: '#554842'
    }
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

const RenderItem = ({ count, id }) => {
  const { getItem } = useStore()
  const item = getItem(id)
  const { openDialog } = useDialog();
  const { player } = useAuth();
  const useNewColor = async () => {
    return await db
      .collection('teams')
      .doc(player.teamId)
      .update({
        [`spaceship.color`]: item.code
      })
  }
  const onClick = () => {
    openDialog('USE_ITEM', { onClick: useNewColor })
  }
  return item ? (
    <Box marginBottom='10px' cursor='pointer' onClick={onClick}>
      {items(item)}{' '}
      <Heading size={400}>{get(COLORS, `${[item.code]}.name`)}</Heading>
      <Heading size={200}>{`${count} unidades`}</Heading>
    </Box>
  ) : null
}

const Inventory = () => {
  const { player } = useAuth()
  const inventory = get(player, 'inventory') || {}
  return (
    <Pane
      position='absolute'
      right={10}
      bottom={10}
      width={350}
      height={250}
      backgroundColor='darkgray'
      borderRadius={10}
      padding={10}
    >
      <Heading size={800}>Inventario</Heading>
      <Heading size={600}>
        ({Object.keys(inventory).length || 0} objetos)
      </Heading>
      <Box
        width='90%'
        alignSelf='center'
        margin={10}
        borderBottom='lightgrey 2px solid'
      />
      <Box display='grid' gridTemplateColumns='repeat(3, 1fr)' gap='10px'>
        {Object.keys(inventory).map(key => (
          <RenderItem
            key={key}
            count={get(inventory, `${[key]}.count`)}
            id={key}
          />
        ))}
      </Box>
    </Pane>
  )
}

export { Inventory }
