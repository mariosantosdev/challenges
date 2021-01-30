import React from 'react'

import { IconButton, Checkbox, Container, FormControlLabel, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@material-ui/core'
import { Delete } from '@material-ui/icons'

import { TabsType } from '../Slider'

import './task.css'

export type TasksType = { id: string, text: string, checked: boolean }

export interface IPropsTask {
    tasks: Array<TasksType>
    onChange: (id: string) => void
    onDelete: (props: { id?: string, clean?: boolean }) => void
    currentTabShow: TabsType
}

const Task: React.FC<IPropsTask> = (props) => {
    const [showDialog, setShowDialog] = React.useState(false)

    const handleShowDialog = () => setShowDialog(!showDialog)

    const completedTasks = props.tasks.filter(item => item.checked).length

    const AlertDelete = () => {
        const confirmDeleteTasks = () => {
            props.onDelete({ clean: true })
            setShowDialog(false)
        }

        return (
            <Dialog
                open={showDialog}
                onClose={handleShowDialog}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">Confirm delete all tasks</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        You has sure delete ALL completed tasks ?
                </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleShowDialog} color="default">
                        Cancel
                </Button>
                    <Button onClick={confirmDeleteTasks} color="secondary" autoFocus>
                        Confirm
                </Button>
                </DialogActions>
            </Dialog>
        )
    }

    return (
        <Container className='container-task'>
            <AlertDelete />
            {props.tasks.map(item => (
                <div className='task-item' key={item.id}>
                    <FormControlLabel
                        control={<Checkbox checked={item.checked} onChange={() => props.onChange(item.id)} name={`${item.id}`} />}
                        label={item.text}
                    />
                    {props.currentTabShow === 'completed' && (
                        <IconButton onClick={() => props.onDelete({ id: item.id })} aria-label="delete" color="secondary">
                            <Delete />
                        </IconButton>
                    )}
                </div>
            ))}
            {(props.currentTabShow === 'completed' && completedTasks > 0) && (
                <div className='footer-tasks'>
                    <Button onClick={handleShowDialog} color="secondary">
                        <Delete /> Delete all
                    </Button>
                </div>
            )}
        </Container>
    )
}

export default Task