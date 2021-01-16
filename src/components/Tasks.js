import React from 'react'
import { Heading, Pane, Button } from 'evergreen-ui'
import Box from 'ui-box'
import { Task } from './'
import { useTasks } from '../hooks'

const Tasks = () => {
  const { tasks = [] } = useTasks()
  return (
    <Pane
      position='absolute'
      right={10}
      top={10}
      width={350}
      height={400}
      backgroundColor='darkgray'
      borderRadius={10}
      padding={10}
    >
      <Heading size={800}>Tareas disponibles ({tasks.length})</Heading>
      <Box
        width='90%'
        alignSelf='center'
        margin={10}
        borderBottom='lightgrey 2px solid'
      />
      <Box display='flex' flexDirection='column' overflow='auto' height={300}>
        {tasks.map(task => (
          <Task
            id={task.id}
            key={task.id}
            title={task.title}
            description={task.description}
          />
        ))}
      </Box>
      <Box display='flex' bottom={10} justifyContent='center'>
        <Button appearance='primary' intent='success'>
          Enviar
        </Button>
      </Box>
    </Pane>
  )
}

export { Tasks }
