import React from 'react'

function Header() {
    return (
        <header>
            <div className="header-logo">
                <img src="https://via.placeholder.com/40" alt="" />
            </div>
            <div className="header-title">Today</div>
            <div className="header-buttons">
                <button id="login">Login</button>
                <button id="login">Sign Up</button>
            </div>
        </header>
    )
}

export default Header
