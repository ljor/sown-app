import React from 'react'

function RegisterForm() {
    return (
        <div>
            <h2>Register</h2>
            <form>
                <label htmlFor="username">Username: </label>
                <input type="text" id="username" name="username"/> <br/>
                <label htmlFor="email">Email: </label>
                <input type="text" id="email" name="email"/> <br/>
                <label htmlFor="zip">Zipcode: </label>
                <input type="number" id="zip" name="zip" pattern="[0-9]*"/> <br/>
                <label htmlFor="name">Password: </label>
                <input type="password" id="password" name="password"/> <br/>
                <input type="submit" value="Login" />
            </form>
        </div>
    )
}

export default RegisterForm
