import React from 'react'
import { useForm } from 'react-hook-form'

function LoginForm({handleLogin}) {
    const { register, handleSubmit } = useForm()

    const onSubmit = data => {
        console.log(data)
        handleLogin(data)
    }
    return (
        <div className="modal">
            <div className="modal-content">
                <div className="modal-header-div">
                    <h2>Log In</h2>
                </div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <label htmlFor="email">Email: </label>
                    <input type="text" id="email" name="email" {...register("email")}/> <br/>

                    <label htmlFor="name">Password: </label>
                    <input type="password" id="password" name="password" {...register("password")}/> <br/>

                    <input type="submit" value="Login" className="submit-btn"/>
                </form>
            </div>
        </div>
    )
}

export default LoginForm
