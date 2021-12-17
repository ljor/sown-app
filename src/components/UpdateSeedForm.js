import React from 'react'


function UpdateSeedForm() {
    return (
        <div>
            <form>
                <label htmlFor="name">Seed Name: </label>
                <input type="text" id="name" name="name"/> <br/>

                <label htmlFor="category">Seed Category: </label>
                <input type="text" id="category" name="category"/> <br/>

                <label htmlFor="indoor_sow_start">Indoor sow start earliest week before last frost:</label>
                <input type="number" id="indoor_sow_start" name="indoor_sow_start" pattern="[0-9]*"/> <br/>

                <label htmlFor="indoor_sow_end">Indoor sow start latest week before last frost:</label>
                <input type="number" id="indoor_sow_end" name="indoor_sow_end" pattern="[0-9]*"/> <br/>

                <label htmlFor="outdoor_sow_start">Outdoor sow start earliest week before last frost:</label>
                <input type="number" id="outdoor_sow_start" name="outdoor_sow_start" pattern="[0-9]*"/> <br/>

                <label htmlFor="outdoor_sow_end">Outdoor sow start latest week before last frost:</label>
                <input type="number" id="outdoor_sow_end" name="outdoor_sow_end" pattern="[0-9]*"/> <br/>

                <label htmlFor="img">Photo URL: </label>
                <input type="text" id="img" name="img"/> <br/>

                <label htmlFor="maturity">Days to Maturity: </label>
                <input type="text" id="maturity" name="maturity"/> <br/>

                <label htmlFor="description">Seed Description: </label>
                <input type="textarea" id="description" name="description" value="set-to-event"/> <br/>
                
                <input type="submit" value="Submit"/>   
            </form>
        </div>
    )
}

export default UpdateSeedForm
