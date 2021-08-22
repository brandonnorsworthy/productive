import React from 'react'

function Habit() {
    return (
        <div className="habit card">
            <div className="card-body">
                <div className="habit-col-a">
                    <span className="material-icons" unselectable="on" onselectstart="return false;"
                        onmousedown="return false;">water_drop</span>
                </div>
                <div className="habit-col-b">
                    <div className="row">
                        <div>
                            <h2>Lorem, ipsum dolor sit amet consectetur adipisicing</h2>
                        </div>
                        <div>
                            <h2><b>0/1</b></h2>
                        </div>
                    </div>
                    <div className="row">
                        <div>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi placeat asperiores
                                facere consectetur, molestias blanditiis.</p>
                        </div>
                        <div>
                            <p>Glasses</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Habit
