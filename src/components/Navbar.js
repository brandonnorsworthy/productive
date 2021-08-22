import React from 'react'

function Navbar(props) {
    return (
        <aside>
            <div>
                <div onClick={props.Clicked} name="Create" className={props.currentContent === "Create" ? 'active' : ''}>
                    <span className="material-icons" unselectable="on" onselectstart="return false;"
                        onmousedown="return false;">
                        create
                    </span>
                    Create
                </div>
                <div onClick={props.Clicked} name="Today" className={props.currentContent === "Today" ? 'active' : ''}>
                    <span className="material-icons" unselectable="on" onselectstart="return false;"
                        onmousedown="return false;">
                        task_alt
                    </span>
                    Today
                </div>
                <div onClick={props.Clicked} name="Stats" className={props.currentContent === "Stats" ? 'active' : ''}>
                    <span className="material-icons" unselectable="on" onselectstart="return false;"
                        onmousedown="return false;">
                        event_available
                    </span>
                    Stats
                </div>
                <div onClick={props.Clicked} name="Habits" className={props.currentContent === "Habits" ? 'active' : ''}>
                    <span className="material-icons" unselectable="on" onselectstart="return false;"
                        onmousedown="return false;">
                        format_list_bulleted
                    </span>
                    Habits
                </div>
                <div onClick={props.Clicked} name="Settings" className={props.currentContent === "Settings" ? 'active' : ''}>
                    <span className="material-icons" unselectable="on" onselectstart="return false;"
                        onmousedown="return false;">
                        settings
                    </span>
                    Settings
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
