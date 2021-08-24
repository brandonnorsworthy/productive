import React from 'react'

function Header({ currentContent, handlePageChange }) {
    function generateHeaderTitle(text) {
        let str = 'error'
        switch (currentContent) {
            case 'create':
                str = 'Create a Habit'
                break;
            case 'stats':
                str = 'Previous Stats'
                break;
            case 'today':
                str = 'Today'
                break;
            case 'habits':
                str = 'All Habits'
                break;
            case 'settings':
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
                <button onClick={() => handlePageChange('home')} id="home">Home</button>
                <button onClick={() => handlePageChange('login')} id="login">Login</button>
                <button onClick={() => handlePageChange('signup')} id="signup">Sign&nbsp;Up</button>
            </div>
        </header>
    )
}

export default Header
