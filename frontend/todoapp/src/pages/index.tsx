import React, { useState, useEffect } from 'react'

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
    const createTask = async (taskDesc: string) => {
        const id = Date.now().toString()
        const text = taskDesc

        const task: TasksType = { id, text, checked: false }

        setTasks([...tasks, task])
        if (activeTab === 'all' || activeTab === 'active') setVisibleTasks([...tasks, task])
        await localStorage.setItem('tasks', JSON.stringify([...tasks, task]))
    }

    // Function to toggle checked taks
    const toggleTask = async (id: string) => {
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
        await localStorage.setItem('tasks', JSON.stringify(allTasks))

    }

    // Function to delete task in state
    const deleteTask = async (props: { id?: string, clean?: boolean }) => {
        if (!props.clean) {
            let allTasks = [...tasks].filter((task) => task.id !== props.id)

            setTasks(allTasks)
            setVisibleTasks(allTasks.filter(task => task.checked))
            await localStorage.setItem('tasks', JSON.stringify([allTasks]))
        } else {
            let justActiveTasks = [...tasks].filter(task => !task.checked)

            setTasks(justActiveTasks)
            setVisibleTasks([])
            await localStorage.setItem('tasks', JSON.stringify([]))
        }
    }

    // Function to fetch all tasks without filter
    const fetchAllTasks = () => setVisibleTasks(tasks)

    // Function to fetch tasks with filter actived tasks
    const fetchActiveTasks = () => setVisibleTasks(tasks.filter(task => !task.checked))

    // Function to fetch tasks with filter completed tasks
    const fetchCompleteTasks = () => setVisibleTasks(tasks.filter(task => task.checked))

    useEffect(() => {
        if (localStorage.getItem('tasks') !== null) {
            const localTasks = JSON.parse(localStorage.getItem('tasks') || '')

            setTasks(localTasks)
            setVisibleTasks(localTasks)
        }
    }, [])

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