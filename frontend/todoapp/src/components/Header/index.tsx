import React, { useState } from 'react'
import { Grid, TextField, Button } from '@material-ui/core'

import './header.css'


interface IPropsHeader {
    onClick: (task: string) => void
}

const Header: React.FC<IPropsHeader> = (props) => {
    const [task, setTask] = useState<string>('')

    const callback = () => {
        if(task === '') return

        props.onClick(task)
        setTask('')
    }

    const callbackWithKeyEnter = (e: React.KeyboardEvent) => {
        if(e.key === 'Enter') return callback()
    }

    return (
        <Grid container spacing={2} className='input-container'>
            <Grid xs={12} md={10} item>
                <TextField
                    value={task} 
                    onChange={(e) => setTask(e.target.value)} 
                    onKeyPress={callbackWithKeyEnter}

                    className='input' 
                    size='small' 
                    label='Write about your task' 
                    variant='outlined' 
                    color='secondary' />
            </Grid>
            <Grid xs={12} md={2} item className='button-container'>
                <Button variant='contained' color='secondary' size='medium' onClick={callback}>Add</Button>
            </Grid>
        </Grid>
    )
}

export default Header