import React from 'react'

function Header({ currentContent, handlePageChange }) {
    function generateHeaderTitle() {
        let str = 'error'
        // switch (currentContent) {
        //     case value:
        //         break;
        // }

        console.log("cc",currentContent)
        return str;
    }

    return (
        <header>
            <div className="header-logo">
                <img src="https://via.placeholder.com/40" alt="" />
            </div>
            <div className="header-title">{ generateHeaderTitle }</div>
            <div className="header-buttons">
                <button onClick={() => handlePageChange('login')} id="login">Login</button>
                <button onClick={() => handlePageChange('signup')} id="signup">Sign&nbsp;Up</button>
            </div>
        </header>
    )
}

export default Header
