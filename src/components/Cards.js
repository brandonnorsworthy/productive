const Cards = () => {
    return (
        <div className="container">
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
            <div className="content">
                <div className="habit card">
                    <div className="card-body">
                        <div className="col-a">
                            <span className="material-icons" unselectable="on" onselectstart="return false;"
                                onmousedown="return false;">water_drop</span>
                        </div>
                        <div className="col-b">
                            <div className="row">
                                <div>
                                    <h2>Lorem, ipsum dolor sit amet consectetur adipisicing</h2>
                                </div>
                                <div>
                                    <h2><b>0/1</b></h2>
                                </div>
                            </div>
                            <div className="row">
                                <div>
                                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi placeat asperiores
                                        facere consectetur, molestias blanditiis.</p>
                                </div>
                                <div>
                                    <p>Glasses</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cards;
