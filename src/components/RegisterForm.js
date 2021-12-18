import React from 'react'
import { useForm } from 'react-hook-form'

function RegisterForm({handleRegister}) {
    const { register, handleSubmit } = useForm()

    const onSubmit = data => {
        handleRegister(data)
    }
    
    return (
        <div>
            <h2>Register</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="username">Username: </label>
                <input type="text" id="username" name="username" {...register("username")}/> <br/>

                <label htmlFor="email">Email: </label>
                <input type="text" id="email" name="email" {...register("email")}/> <br/>

                <label htmlFor="zip">Zipcode: </label>
                <input type="number" id="zip" name="zip" pattern="[0-9]*" {...register("zip")}/> <br/>

                <label htmlFor="name">Password: </label>
                <input type="password" id="password" name="password" {...register("password")}/> <br/>
                
                <input type="submit" value="Register" className="submit-btn"/>
            </form>
        </div>
    )
}

export default RegisterForm
