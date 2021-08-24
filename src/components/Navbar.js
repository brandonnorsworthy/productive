import React from 'react'

function Navbar({ currentContent, handleCurrentContentChange }) {
    return (
        <aside>
            <div>
                <div onClick={() => handleCurrentContentChange('create')} name="create" className={currentContent === "create" ? 'active' : ''}>
                    <span className="material-icons" unselectable="on">
                        create
                    </span>
                    <p>
                        Create
                    </p>
                </div>
                <div onClick={() => handleCurrentContentChange('stats')} name="stats" className={currentContent === "stats" ? 'active' : ''}>
                    <span className="material-icons" unselectable="on">
                        event_available
                    </span>
                    <p>
                        Stats
                    </p>
                </div>
                <div onClick={() => handleCurrentContentChange('today')} name="today" className={currentContent === "today" ? 'active' : ''}>
                    <span className="material-icons" unselectable="on">
                        task_alt
                    </span>
                    <p>
                        Today
                    </p>
                </div>
                <div onClick={() => handleCurrentContentChange('habits')} name="habits" className={currentContent === "habits" ? 'active' : ''}>
                    <span className="material-icons" unselectable="on">
                        format_list_bulleted
                    </span>
                    <p>
                        Habits
                    </p>
                </div>
                <div onClick={() => handleCurrentContentChange('settings')} name="settings" className={currentContent === "settings" ? 'active' : ''}>
                    <span className="material-icons" unselectable="on">
                        settings
                    </span>
                    <p>
                        Settings
                    </p>
                </div>
            </div>
            <p>
                <a href="/about">About</a>&nbsp;•&nbsp;
                <a href="https://github.com/brandonnorsworthy/productive" rel="noreferrer" target="_blank">Github</a>&nbsp;•&nbsp;
                <a href="https://github.com/brandonnorsworthy/productive/blob/main/LICENSE" rel="noreferrer" target="_blank">License</a>&nbsp;•&nbsp;
                <a href="https://www.figma.com/file/GeqG7ziw4s18g7aSJ7K29e/Productive" rel="noreferrer" target="_blank">Figma</a>
            </p>
            <p>
                © 2021&nbsp;
                <a href="https://github.com/brandonnorsworthy" rel="noreferrer" target="_blank">BRANDON NORSWORTHY</a>&nbsp;•&nbsp;
                <a href="https://github.com/andwilson36" rel="noreferrer" target="_blank">ANDREW WILSON</a>&nbsp;•&nbsp;
                <a href="https://github.com/Jguiro09" rel="noreferrer" target="_blank">JACOB GUIRO</a>
            </p>
        </aside>
    )
}

export default Navbar
