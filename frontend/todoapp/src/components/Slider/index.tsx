import React from 'react'
import { Tabs, Tab } from '@material-ui/core'

export type TabsType = 'all' | 'active' | 'completed'

export interface IPropsSlide {
    active: TabsType
    onChange: (event: React.ChangeEvent<{}>, newPage: TabsType) => void
}

const Slider: React.FC<IPropsSlide> = (props) => {
    return (
        <Tabs
            value={props.active}
            onChange={props.onChange}
            indicatorColor='secondary'
            textColor= 'secondary'
            centered
        >
            <Tab label='All' value='all' />
            <Tab label='Active' value='active' />
            <Tab label='Completed' value='completed' />
        </Tabs>
    )
}

export default Slider