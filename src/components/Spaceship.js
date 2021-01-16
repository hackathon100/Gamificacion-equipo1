import React, { useState } from 'react'
import { Pane, Heading, Tab, Tablist, Paragraph } from 'evergreen-ui'
import { useTeam } from '../hooks'
import { PlayerAvatar } from './'
import { get } from 'lodash'

const tabs = [
  { id: 'SPACE_SHIP', label: 'Nave' },
  { id: 'PLAYERS', label: 'Tripulantes' },
  { id: 'STATS', label: 'Especificaciones' }
]

const renderTab = (tab, team) => {
  switch (tab.id) {
    case 'SPACE_SHIP':
      return (
        <Pane
          display='flex'
          flexDirection='column'
          flex={1}
          alignItems='center'
        >
          <Heading size={600} color='white'>
            {get(team, 'spaceship.name')}
          </Heading>
          <Pane display='flex' className='spaceship' flexDirection='column'>
            <img
              style={{ height: 100, width: 116 }}
              src={
                `./images/spaceship/${get(team, 'spaceship.pieces.top')}.png` ||
                './images/spacehip/top_basic_0.png'
              }
              alt='avatar'
            />
            <img
              style={{ height: 150, width: 116 }}
              src={
                `./images/spaceship/${get(team, 'spaceship.pieces.body')}.png` ||
                './images/spacehip/body_basic_0.png'
              }
              alt='avatar'
            />
            <img
              style={{ height: 150, width: 116 }}
              src={
                `./images/spaceship/${get(team, 'spaceship.pieces.bottom')}.png` ||
                './images/spacehip/bottom_basic_0.png'
              }
              alt='avatar'
            />
          </Pane>
        </Pane>
      )
    case 'PLAYERS':
      console.log(team)
      return (
        (team &&
          team.players &&
          team.players.map(player => (
            <PlayerAvatar
              uid={player.uid}
              name={player.displayName}
              photo={player.photoURL}
            />
          ))) ||
        null
      )
    case 'STATS':
      return (
        <Pane display='flex' flexDirection='column'>
          <Heading size={200}>
            Municion: {get(team, 'spaceship.stats.ammo')}
          </Heading>
          <Heading size={200}>
            Propulsion: {get(team, 'spaceship.stats.propulsion')}
          </Heading>
          <Heading size={200}>
            Escudos: {get(team, 'spaceship.stats.shield')}
          </Heading>
        </Pane>
      )
    default:
      break
  }
}

const Spaceship = () => {
  const { team } = useTeam()
  const [tabSelected, setTabSelected] = useState('SPACE_SHIP')
  return (
    <Pane>
      <Tablist marginBottom={16} flexBasis={240} marginRight={24}>
        {tabs.map(tab => (
          <Tab
            key={tab.id}
            id={tab.id}
            onSelect={() => setTabSelected(tab.id)}
            isSelected={tab.id === tabSelected}
            aria-controls={`panel-${tab.id}`}
            backgroundColor='#ccc'
          >
            {tab.label}
          </Tab>
        ))}
      </Tablist>
      <Pane padding={16} flex='1'>
        {tabs.map(tab => (
          <Pane
            key={`panel-${tab.id}`}
            id={`panel-${tab.id}`}
            role='tabpanel'
            aria-labelledby={tab.id}
            aria-hidden={tab.id !== tabSelected}
            display={tab.id === tabSelected ? 'block' : 'none'}
          >
            {renderTab(tab, team)}
          </Pane>
        ))}
      </Pane>
    </Pane>
  )
}

export { Spaceship }
