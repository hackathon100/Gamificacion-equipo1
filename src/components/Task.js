import React, { useState, useEffect } from 'react'
import { Heading, Badge, Paragraph, Checkbox } from 'evergreen-ui'
import Box from 'ui-box'
import { useTeam, useAuth, useTasks } from '../hooks'
import { get, findIndex } from 'lodash'
import { db } from '../index'
import 'firebase/firestore'

const Task = ({ id, title, status, type, description }) => {
  const [completedBy, setCompletedBy] = useState([])
  const { updateTask } = useTasks()
  const { team } = useTeam()
  const players = get(team, 'players') || []
  const { player, user } = useAuth()

  const onComplete = () => {
    updateTask(id, !getComplete(user.uid))
  }

  useEffect(() => {
    let teamCollection = () => {}
    if (player)
      teamCollection = db
        .collection('teams')
        .doc(player.teamId)
        .collection('tasks')
        .doc(id)
        .onSnapshot(async task => {
          if (task.data()) {
            const ids = await Promise.all(
              task.data().completedBy.map(player => player.id)
            )
            setCompletedBy(ids)
          }
        })
    return () => {
      teamCollection()
    }
  }, [player, id])

  const getComplete = playerId => {
    const status = completedBy.filter(id => id === playerId)
    return status.length > 0
  }

  return (
    <Box display='flex' flexDirection='column' margin={5}>
      <Box display='flex' flexDirection='row' justifyContent='space-between'>
        <Heading size={500} color='white'>
          {title}
        </Heading>
      </Box>
      <Paragraph>{description}</Paragraph>
      {players.map(coPlayer => (
        <Box
          display='flex'
          flexDirection='row'
          justifyContent='space-between'
          key={`completedBy-${coPlayer.uid}`}
          height={16}
          margin={2}
        >
          <Box display='flex' flexDirection='row' justifyContent='flex-start'>
            <Heading size={400} marginRight='10px'>
              {coPlayer.displayName}
            </Heading>
            <Badge
              cursor='pointer'
              color={getComplete(coPlayer.uid) ? 'green' : 'blue'}
            >
              {getComplete(coPlayer.uid) ? 'Completado' : 'Pendiente'}
            </Badge>
          </Box>
          <Checkbox
            disabled={user.uid !== coPlayer.uid}
            top={-15}
            checked={getComplete(coPlayer.uid)}
            onChange={onComplete}
          />
        </Box>
      ))}
    </Box>
  )
}

export { Task }
