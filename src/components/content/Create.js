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
                <div className="row create-options mt-3">
                    <div className="j-s">
                        Repeat
                    </div>
                    <div className="j-e">
                        <span class="material-icons">
                            toggle_on
                        </span>
                    </div>
                </div>
                <div className="row create-options">
                    <div className="j-s">
                        Weekends
                    </div>
                    <div className="j-e">
                        <span class="material-icons">
                            date_range
                        </span>
                    </div>
                </div>
                <div className="row create-options">
                    <div className="j-s">
                        Set end date
                    </div>
                    <div className="j-e">
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
            </div>
        </div>
    )
}

export default Create
