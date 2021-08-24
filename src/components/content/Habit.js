import React from 'react'

function Habit(props) {
    return (
        <div className="habit card">
            <div className="card-body">
                <div className="habit-col-a">
                    <span className="material-icons" unselectable="on" onselectstart="return false;"
                        onmousedown="return false;">{props.habit.icon}</span>
                </div>
                <div className="habit-col-b">
                    <div className="row">
                        <div>
                            <h2>{props.habit.habitName}</h2>
                        </div>
                        <div>
                            <h2><b>{props.habit.quantity.count}
                                {props.habit.quantity.total}</b></h2>
                        </div>
                    </div>
                    <div className="row">
                        <div>
                            <p>{props.habit.description}</p>
                        </div>
                        <div>
                            <p>{props.habit.subject}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Habit
