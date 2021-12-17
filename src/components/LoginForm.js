import React from 'react'

function LoginForm() {
    return (
        <div className="modal">
            <h2>Log In</h2>
            <form>
                <label htmlFor="email">Email: </label>
                <input type="text" id="email" name="email"/> <br/>
                <label htmlFor="name">Password: </label>
                <input type="password" id="password" name="password"/> <br/>
                <input type="submit" value="Login" />
            </form>
        </div>
    )
}

export default LoginForm
