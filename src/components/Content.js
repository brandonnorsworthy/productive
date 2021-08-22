import React from 'react'
import Hero from './content/Hero'
import Habit from './content/Habit'
import '../cards.css'

function Content(props) {
    console.log("props", props)
    return (
        <div className="content">
            {props.currentContent === 'Today' ? <Hero /> : console.log('error')}
            {props.currentContent === 'Today' || props.currentContent === 'Habits' ? <Habit /> : console.log('error')}
        </div>
    )
}

export default Content
