import React from 'react'
import { useForm } from 'react-hook-form'

function AddSeedForm({handleAddSeed}) {
    const { register, handleSubmit } = useForm()

    const onSubmit = data => {
        console.log(data)
        handleAddSeed(data)
    }
    return (
        <div className="modal">
            <div className="modal-content">
                <div className="modal-header-div">
                    <h2>Add Seed</h2>
                </div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <label htmlFor="name">Seed Name: </label>
                    <input type="text" id="name" name="name" className="add-seed-input" {...register("name")}/> <br/>

                    <label htmlFor="category">Seed Category: </label>
                    <input type="text" id="category" name="category" className="add-seed-input" {...register("category")}/> <br/>

                    <label htmlFor="indoor_sow_start">Indoor sow start earliest week before last frost: </label>
                    <input type="number" id="indoor_sow_start" name="indoor_sow_start" pattern="[0-9]*" className="add-seed-input small-input" {...register("indoor_sow_start")}/> <br/>

                    <label htmlFor="indoor_sow_end">Indoor sow start latest week before last frost:</label>
                    <input type="number" id="indoor_sow_end" name="indoor_sow_end" pattern="[0-9]*" className="add-seed-input small-input" {...register("indoor_sow_end")}/> <br/>

                    <label htmlFor="outdoor_sow_start">Outdoor sow start earliest week after last frost: </label>
                    <input type="number" id="outdoor_sow_start" name="outdoor_sow_start" pattern="[0-9]*" className="add-seed-input small-input"{...register("outdoor_sow_start")}/> <br/>

                    <label htmlFor="outdoor_sow_end">Outdoor sow start latest week after last frost: </label>
                    <input type="number" id="outdoor_sow_end" name="outdoor_sow_end" pattern="[0-9]*" className="add-seed-input small-input" {...register("outdoor_sow_end")}/> <br/>

                    <label htmlFor="img">Photo URL: </label>
                    <input type="text" id="img" name="img" className="add-seed-input" {...register("img")}/> <br/>

                    <label htmlFor="maturity">Days to Maturity: </label>
                    <input type="text" id="maturity" name="maturity" className="add-seed-input" {...register("maturity")}/> <br/>

                    <label htmlFor="description">Seed Description: </label>
                    <input type="text" id="description" name="description" className="add-seed-input" {...register("description")}/> <br/>
                    
                    <input type="submit" value="Submit" className="submit-btn"/>   
                </form>
            </div>
        </div>
    )
}

export default AddSeedForm
