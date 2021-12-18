import React from 'react'

function ZipcodeForm() {
    return (
        <div>
            <form>
                <label htmlFor="zip">Zipcode: </label>
                <input type="text" id="zip" name="zip"/> <br/>
                
                <input type="submit" value="Submit" className="submit-btn"/>
            </form>
        </div>
    )
}

export default ZipcodeForm
