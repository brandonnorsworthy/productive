import React from 'react'
import Create from './content/Create'
import Hero from './content/Hero'
import Habit from './content/Habit'
import '../cards.css'

function Content(props) {
    return (
        <div className="content">
            {props.currentContent === 'Today' ? <Hero /> : <></>}
            {props.currentContent === 'Create' ? <Create /> : props.currentContent === 'Today' || props.currentContent === 'Habits' ? <Habit /> : <></>}
        </div>
    )
}

export default Content
