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

const habits = () =>
    fetch('/api/habits', {
        method: 'GET',
    })
        .then((res) => res.json())

// This function will map through and filter by day - do not touch yet
// const todaysHabits = () =>
//     fetch('/api/habits', {
//         method: 'GET',
//     })
//         .then((res) => res.json())

function Content(props) {
    return (
        <div className="content">
            {props.currentContent === 'create' ? <Create />
                : props.currentContent === 'today' ? <Content />
                    : props.currentContent === 'habits' ? habits.map((habit) => (
                        <Habit habit={habit} />))
                        // <Settings />
                        : <></>}
        </div>
    )
}

export default Content
