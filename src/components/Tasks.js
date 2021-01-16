import React, { useState } from 'react'
import { Heading, Pane, Button, TextInput, Paragraph } from 'evergreen-ui'
import Box from 'ui-box'
import { Task } from './'
import { useTasks, useTeam, useAuth, useDialog } from '../hooks'
import { get } from 'lodash'

const Tasks = () => {
  const { tasks = [] } = useTasks()
  const { team } = useTeam()
  const { user } = useAuth()
  const [loading, setLoading] = useState(false)
  const { openDialog } = useDialog()
  const link = get(team, `links.${user.uid}`)
  const [newLink, setNewLink] = useState()
  const sendLink = () => {
    setLoading(true)
    const onClose = () => {
      setNewLink('')
      setLoading(false)
    }
    openDialog('SEND_LINK', { onClose, newLink })
  }
  return (
    <Pane
      position='absolute'
      right={10}
      top={10}
      width={350}
      height={460}
      backgroundColor='darkgray'
      borderRadius={10}
      padding={10}
    >
      <Heading size={800}>
        Tareas disponibles ({link ? '0' : tasks.length})
      </Heading>
      <Box
        width='90%'
        alignSelf='center'
        margin={10}
        borderBottom='lightgrey 2px solid'
      />
      {link ? (
        <>
          <Paragraph>
            Ya has enviado todas tus respuestas, solo queda esperar a que tu
            profesor revise tu documento
          </Paragraph>
          <Paragraph>
            Puedes ayudar a tus compañeros! 
          </Paragraph>
        </>
      ) : (
        <>
          <Box
            display='flex'
            flexDirection='column'
            overflow='auto'
            height={300}
          >
            {tasks.map(task => (
              <Task
                id={task.id}
                key={task.id}
                title={task.title}
                description={task.description}
              />
            ))}
          </Box>
          <Box display='flex' width='100%' margin={5}>
            <TextInput
              flex={1}
              name='text-input-name'
              placeholder='Link al documento'
              value={newLink}
              onChange={e => setNewLink(e.target.value)}
            />
          </Box>
          <Box display='flex' bottom={10} justifyContent='center'>
            <Button
              appearance='primary'
              intent='success'
              loading={loading}
              onClick={sendLink}
            >
              Enviar
            </Button>
          </Box>
        </>
      )}
    </Pane>
  )
}

export { Tasks }
