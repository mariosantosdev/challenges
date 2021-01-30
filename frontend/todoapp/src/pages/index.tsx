import React, { useState } from 'react'

import { Container, Typography } from '@material-ui/core'

import Slider, { TabsType } from '../components/Slider'
import Header from '../components/Header'
import Task, { TasksType } from '../components/Task'

import './styles/home.css'

const HomePage: React.FC = (props) => {
    const [activeTab, setActiveTab] = useState<TabsType>('all')
    const [tasks, setTasks] = useState<Array<TasksType>>([])
    const [visibleTasks, setVisibleTasks] = useState<Array<TasksType>>([])

    // Function to change tab page
    const changePage = (event: React.ChangeEvent<{}>, newPage: TabsType) => {
        setActiveTab(newPage)

        if (newPage === 'all') return fetchAllTasks()
        if (newPage === 'active') return fetchActiveTasks()
        if (newPage === 'completed') return fetchCompleteTasks()
    }

    // Function to create a new task
    const createTask = (taskDesc: string) => {
        const id = Date.now().toString()
        const text = taskDesc

        const task: TasksType = { id, text, checked: false }

        setTasks([...tasks, task])
        if(activeTab === 'all' || activeTab === 'active') setVisibleTasks([...tasks, task])
    }

    // Function to toggle checked taks
    const toggleTask = (id: string) => {
        let taskState: boolean = false
        let allTasks = [...tasks].map((task) => {
            if (task.id === id) {
                task.checked = !task.checked
                taskState = task.checked
            }

            return task
        })

        setTasks(allTasks)
        if (activeTab === 'completed' && !taskState) fetchCompleteTasks()
        if (activeTab === 'active' && taskState) fetchActiveTasks()
        if (activeTab === 'all') setVisibleTasks(allTasks)
        await localStorage.setItem('tasks', JSON.stringify([allTasks]))

    }

    // Function to delete task in state
    const deleteTask = (props: { id?: string, clean?: boolean }) => {
        if (!props.clean) {
            let allTasks = [...tasks].filter((task) => task.id !== props.id)

            setTasks(allTasks)
            setVisibleTasks(allTasks.filter(task => task.checked))
        } else {
            let justActiveTasks = [...tasks].filter(task => !task.checked)

            setTasks(justActiveTasks)
            setVisibleTasks([])
        }
    }

    // Function to fetch all tasks without filter
    const fetchAllTasks = () => setVisibleTasks(tasks)

    // Function to fetch tasks with filter actived tasks
    const fetchActiveTasks = () => setVisibleTasks(tasks.filter(task => !task.checked))

    // Function to fetch tasks with filter completed tasks
    const fetchCompleteTasks = () => setVisibleTasks(tasks.filter(task => task.checked))

    return (
        <Container className='container' maxWidth='sm'>
            <Typography variant='h3' className='title-website'>#todopp</Typography>
            <Slider onChange={changePage} active={activeTab} />
            <Header onClick={createTask} />

            <Task tasks={visibleTasks} currentTabShow={activeTab} onChange={toggleTask} onDelete={deleteTask} />
        </Container>
    )
}

export default HomePage