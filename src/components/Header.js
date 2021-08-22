import React from 'react'

function Header() {
    return (
        <header>
            <div className="header-logo">
                <img src="https://via.placeholder.com/40" alt="" />
            </div>
            <div className="header-title">Today</div>
            <div className="header-buttons">
                <a href="https://github.com/brandonnorsworthy/productive" target="_blank" rel="noreferrer" alt="">GitHub</a>
                <a href="https://www.figma.com/file/GeqG7ziw4s18g7aSJ7K29e/Productive" target="_blank" rel="noreferrer" alt="">Figma</a>
                <button id="login">Login</button>
                <button id="login">Sign&nbsp;Up</button>
            </div>
        </header>
    )
}

export default Header
