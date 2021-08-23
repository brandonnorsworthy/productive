import React, { useState } from 'react';
import '../../create.css';

function Create() {

    const [description, setDescription] = useState('');
    const [title, setTitle] = useState('');
    const color = 'Teal';
    const icon = 'water_drop';
    const repeating = false;
    const days = [false, false, true, false, true, true, false];

    const changeHandler = (e) => {
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;

        // Based on the input type, we set the state of either email, username, and password
        if (inputType === 'title') {
            setTitle(inputValue);
        } else {
            setDescription(inputValue);
        }
    }

    const submitHandler = async (e) => {
        e.preventDefault();

        let valid = false;

        if(!title) {
            alert('Please enter a title.');
        } else if(!description) {
            alert('Please enter a description.');
        } else {
            console.log(`${title} is valid.`);
            valid = true;
        }

        if(valid) {
            const response = await fetch('/api/create', {
                method: 'POST',
                body: JSON.stringify({ title, description, color, icon, repeating, days }),
                headers: { 'Content-Type': 'application/json'},
            });

            if (response.ok) {
                console.log(`${title} posted.`)
            }

            setTitle('')
            setDescription('')
        }
    }

    return (
        <div className="create card">
            <div className="card-body">
                <div className="row">
                    <input value={title} onChange={changeHandler} type="text" name="title" placeholder="Title" />
                </div>
                <div className="row">
                    <input value={description} onChange={changeHandler} type="text" name="description" placeholder="Description" />
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
                    <button onClick={submitHandler}>
                        CREATE
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Create
