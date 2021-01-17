import React, { useState } from 'react'
import Box from 'ui-box'
import { useTeacher } from '../hooks'
import { Heading, Paragraph, Badge, Button } from 'evergreen-ui'
import { get } from 'lodash'
import { TaskByTeam } from '../components'

const TeacherTask = task => {
  return (
    <Box
      backgroundColor='#dadada'
      width='450px'
      margin={10}
      padding={10}
      borderRadius={5}
    >
      <Box display='flex' flexDirection='column'>
        <Box display='flex' flexDirection='row' justifyContent='space-between'>
          <Heading size={600}>{get(task, 'title')}</Heading>
          <Badge color={task.available ? 'blue' : 'green'}>
            {task.available ? 'Activa' : 'Revisada'}
          </Badge>
        </Box>
        <Box display='flex' flexDirection='row' justifyContent='space-between'>
          <Paragraph>{get(task, 'description')}</Paragraph>
          <Button
            appearance='primary'
            disabled={!task.available}
            marginBottom='5px'
          >
            Editar
          </Button>
        </Box>
      </Box>
    </Box>
  )
}

const Teacher = () => {
  const { tasks } = useTeacher()
  return (
    <Box display='flex' flexDirection='row'>
      <Box
        display='flex'
        width='470px'
        flexDirection='column'
        height='600px'
        overflow='auto'
      >
        <Box
          display='flex'
          flexDirection='row'
          justifyContent='space-between'
          padding={10}
        >
          <Heading size='800' color='white'>
            Tareas
          </Heading>
          <Button appearance='primary'>Nueva Tarea</Button>
        </Box>
        {tasks.map(task => (
          <TeacherTask key={task.id} {...task} />
        ))}
      </Box>
      <Box
        marginTop='40px'
        display='flex'
        width='70%'
        height='100%'
        backgroundColor='#dadada'
      >
        <TaskByTeam />
      </Box>
    </Box>
  )
}

export { Teacher }
