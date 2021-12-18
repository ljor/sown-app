import React from 'react'
import { useForm } from 'react-hook-form'

function ZipcodeForm({handleZip}) {
    const { register, handleSubmit } = useForm()

    const onSubmit = data => {
        console.log(data)
        handleZip(data)
    }
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="zip">Zipcode: </label>
                <input type="text" id="zip" name="zip" {...register("zip")}/> <br/>
                
                <input type="submit" value="Submit" className="submit-btn"/>
            </form>
        </div>
    )
}

export default ZipcodeForm
