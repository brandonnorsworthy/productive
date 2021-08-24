import React from 'react'
import Create from './content/Create'
import Hero from './content/Hero'
import Habit from './content/Habit'
import '../cards.css'

const habit = {
    icon: 'water_drop',
    habitName: 'Drink Water',
    quantity: { count: "0", total: '/1' },
    description: 'Drink one glass of water.',
    subject: 'Glasses'
}

function Content(props) {
    return (
        <div className="content">
            {props.currentContent === 'today' ? <Hero /> : <></>}
            {props.currentContent === 'create' ? <Create /> : props.currentContent === 'today' || props.currentContent === 'habits' ? <Habit habit={habit} /> : <></>}
        </div>
    )
}

export default Content
