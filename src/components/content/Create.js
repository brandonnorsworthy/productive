import React from 'react'
import '../../create.css'

function Create() {
    return (
        <div className="create card">
            <div className="card-body">
                <div className="row">
                    <input type="text" name="title" placeholder="Title" />
                </div>
                <div className="row">
                    <input type="text" name="description" placeholder="Description" />
                </div>
                <div className="row mt-3">
                    <div className="create-col-a">
                        <div className="icon">
                            <span class="material-icons">
                                shopping_cart
                            </span>
                        </div>
                        Icon
                    </div>
                    <div className="create-col-b">
                        <div className="icon">
                            <span class="material-icons">
                                palette
                            </span>
                        </div>
                        Color
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="j-s">
                        Repeat
                    </div>
                    <div className="j-e">
                        <span class="material-icons">
                            toggle_on
                        </span>
                    </div>
                </div>
                <div className="row">
                    Weekends
                </div>
                <div className="row">
                    <div className="j-s">
                        Set end date
                    </div>
                    <div className="j-s">
                        <span class="material-icons">
                            toggle_off
                        </span>
                    </div>
                </div>
                <div className="row mt-3">
                    <button>
                        CREATE
                    </button>
                </div>
                {/* <div className="create-col-a">
                    <span className="material-icons" unselectable="on" onselectstart="return false;"
                        onmousedown="return false;">water_drop</span>
                </div>
                <div className="create-col-b">
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
                </div> */}
            </div>
        </div>
    )
}

export default Create
