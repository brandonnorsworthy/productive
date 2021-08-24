import React from 'react'

function Login({ currentPage, handlePageChange }) {
    function createLoginCard() {
        return (<div key="login" className="create card">
            <div className="card-body">
                <div className="row">
                    <input value='test' type="text" name="title" placeholder="Title" />
                </div>
            </div>
        </div>)
    }

    return (
        <div className="content">
            {/* !basic ternary of the login page wip */}
            {/* {currentPage === 'login' ? { createLoginCard } : <div className="signup card">

            </div>} */}
        </div>
    )
}

export default Login
