import React from 'react'
import Hero from './content/Hero'
import Habit from './content/Habit'
import '../cards.css'

function Content() {
    return (
        <div className="content">
            <Hero />
            <Habit />
        </div>
    )
}

export default Content
