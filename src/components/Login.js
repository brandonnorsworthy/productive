import React from 'react'

const Login = ({ currentPage, handlePageChange }) => {
    return (
        <div className="content">
            {currentPage === 'Login' ? <div className="login card">

            </div> : <div className="signup card">

            </div>}
        </div>
    )
}

export default Login
