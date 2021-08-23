import React from 'react'

function Header({ handlePageChange }) {
    return (
        <header>
            <div className="header-logo">
                <img src="https://via.placeholder.com/40" alt="" />
            </div>
            <div className="header-title">Today</div>
            <div className="header-buttons">
                <button onClick={() => handlePageChange('login')} id="login">Login</button>
                <button onClick={() => handlePageChange('signup')} id="signup">Sign&nbsp;Up</button>
            </div>
        </header>
    )
}

export default Header
