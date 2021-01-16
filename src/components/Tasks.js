import React from 'react'
import { Heading, Pane, Badge, Paragraph } from 'evergreen-ui'
import Box from 'ui-box'
import { Task } from './'
import { useTasks } from '../hooks'

const Tasks = () => {
  const { tasks = [] } = useTasks()
  console.log(tasks)
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
      <Heading size={800}>Tareas disponibles</Heading>
      <Box
        width='90%'
        alignSelf='center'
        margin={10}
        borderBottom='lightgrey 2px solid'
      />
      <Box display='flex' flexDirection='column'>
        {tasks.map(task => (
          <Task
            key={task.id}
            title={task.title}
            description={task.description}
          />
        ))}
      </Box>
    </Pane>
  )
}

export { Tasks }
