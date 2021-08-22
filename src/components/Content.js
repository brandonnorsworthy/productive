import React from 'react'
import Hero from './content/Hero'
import Habit from './content/Habit'
import '../cards.css'

const habit = {
    icon:'water_drop',
    habitName: 'Drink Water',
    quantity: {count: "0", total: '/1'},
    description: 'Drink one glass of water.',
    subject: 'Glasses'
}

function Content(props) {
    console.log("props", props)
    return (
        <div className="content">
            {props.currentContent === 'Today' ? <Hero /> : console.log('error')}
            {props.currentContent === 'Today' || props.currentContent === 'Habit' ? <Habit habit={habit} /> : console.log('error')}
        </div>
    )
}

export default Content
