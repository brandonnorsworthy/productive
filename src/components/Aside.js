const Aside = () => {
    return ( 
        <aside>
            <div>
                <div>
                    <span className="material-icons" unselectable="on" onselectstart="return false;"
                        onmousedown="return false;">
                        create
                    </span>
                    Create
                </div>
                <div className="active">
                    <span className="material-icons" unselectable="on" onselectstart="return false;"
                        onmousedown="return false;">
                        task_alt
                    </span>
                    Today
                </div>
                <div>
                    <span className="material-icons" unselectable="on" onselectstart="return false;"
                        onmousedown="return false;">
                        event_available
                    </span>
                    Stats
                </div>
                <div>
                    <span className="material-icons" unselectable="on" onselectstart="return false;"
                        onmousedown="return false;">
                        format_list_bulleted
                    </span>
                    Habits
                </div>
                <div>
                    <span className="material-icons" unselectable="on" onselectstart="return false;"
                        onmousedown="return false;">
                        settings
                    </span>
                    Settings
                </div>
            </div>
            <p>
                <a href="/about">About</a> •
                <a href="https://github.com/brandonnorsworthy/productive">Github</a> •
                <a href="https://github.com/brandonnorsworthy/productive/blob/main/LICENSE">License</a>
            </p>
            <p>© 2021
                <a href="https://github.com/brandonnorsworthy">BRANDON NORSWORTHY</a> •
                <a href="https://github.com/andwilson36">ANDREW WILSON</a> •
                <a href="https://github.com/Jguiro09">JACOB GUIRO</a>
            </p>
        </aside>
    )
}

export default Aside;