import React from 'react'
import { useForm } from 'react-hook-form'

function RegisterForm({handleRegister}) {
    const { register, handleSubmit } = useForm()

    const onSubmit = data => {
        handleRegister(data)
    }
    
    return (
        <div className="modal">
            <div className="modal-content">
                <div className="modal-header-div">
                    <h2>Register</h2>
                </div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <label htmlFor="username">Username: </label>
                    <input type="text" name="username" {...register("username")}/> <br/>

                    <label htmlFor="email">Email: </label>
                    <input type="text" name="email" {...register("email")}/> <br/>

                    <label htmlFor="zip">Zipcode: </label>
                    <input type="number" name="zip" pattern="[0-9]*" {...register("zip")}/> <br/>

                    <label htmlFor="name">Password: </label>
                    <input type="password" name="password" {...register("password")}/> <br/>
                    
                    <input type="submit" value="Register" className="submit-btn"/>
                </form>
            </div>
        </div>
    )
}

export default RegisterForm
