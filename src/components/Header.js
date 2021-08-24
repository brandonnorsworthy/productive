import React from 'react'

function Header({ currentContent, handlePageChange }) {
    function generateHeaderTitle(text) {
        let str = 'error'
        switch (currentContent) {
            case 'Create':
                str = 'Create a Habit'
                break;
            case 'Stats':
                str = 'Previous Stats'
                break;
            case 'Today':
                str = 'Today'
                break;
            case 'Habits':
                str = 'All Habits'
                break;
            case 'Settings':
                str = 'Settings'
                break;
            default:
                break;
        }

        return str;
    }

    return (
        <header>
            <div className="header-logo">
                <img src="https://via.placeholder.com/40" alt="" />
            </div>
            <div className="header-title">{generateHeaderTitle(currentContent)}</div>
            <div className="header-buttons">
                <button onClick={() => handlePageChange('login')} id="login">Login</button>
                <button onClick={() => handlePageChange('signup')} id="signup">Sign&nbsp;Up</button>
            </div>
        </header>
    )
}

export default Header
