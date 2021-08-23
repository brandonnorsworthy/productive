import React from 'react'

function Navbar({ currentContent, handlecurrentContentChange }) {
    return (
        <aside>
            <div>
                <div onClick={() => handlecurrentContentChange('Create')} name="Create" className={currentContent === "Create" ? 'active' : ''}>
                    <span className="material-icons" unselectable="on">
                        create
                    </span>
                    <p>
                        Create
                    </p>
                </div>
                <div onClick={() => handlecurrentContentChange('Stats')} name="Stats" className={currentContent === "Stats" ? 'active' : ''}>
                    <span className="material-icons" unselectable="on">
                        event_available
                    </span>
                    <p>
                        Stats
                    </p>
                </div>
                <div onClick={() => handlecurrentContentChange('Today')} name="Today" className={currentContent === "Today" ? 'active' : ''}>
                    <span className="material-icons" unselectable="on">
                        task_alt
                    </span>
                    <p>
                        Today
                    </p>
                </div>
                <div onClick={() => handlecurrentContentChange('Habits')} name="Habits" className={currentContent === "Habits" ? 'active' : ''}>
                    <span className="material-icons" unselectable="on">
                        format_list_bulleted
                    </span>
                    <p>
                        Habits
                    </p>
                </div>
                <div onClick={() => handlecurrentContentChange('Settings')} name="Settings" className={currentContent === "Settings" ? 'active' : ''}>
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
