import React from 'react'

import { IconButton, Checkbox, Container, FormControlLabel } from '@material-ui/core'
import { Delete } from '@material-ui/icons'

import { TabsType } from '../Slider'

import './task.css'

export type TasksType = { id: string, text: string, checked: boolean }

export interface IPropsTask {
    tasks: Array<TasksType>
    onChange: (id: string) => void
    onDelete: (id: string) => void
    currentTabShow: TabsType
}

const Task: React.FC<IPropsTask> = (props) => {

    return (
        <Container className='container-task'>
            {props.tasks.map(item => (
                <div className='task-item' key={item.id}>
                    <FormControlLabel
                        control={<Checkbox checked={item.checked} onChange={() => props.onChange(item.id)} name={`${item.id}`} />}
                        label={item.text}
                    />
                    {props.currentTabShow === 'completed' && (
                        <IconButton onClick={() => props.onDelete(item.id)} aria-label="delete" color="secondary">
                            <Delete />
                        </IconButton>
                    )}
                </div>
            ))}
        </Container>
    )
}

export default Task