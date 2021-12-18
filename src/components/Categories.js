import '../App.css'
import React, { useState } from 'react'

function Categories({seedData}) {
    const [seedDisplay, setSeedDisplay] = useState(false)


    const toggleSeedDisplay = () => {
        seedDisplay ? setSeedDisplay(false) : setSeedDisplay(true)
    }

    return (
        <div>
            <div className="seed-container">
                {seedData.map(seed => (
                        <div key={seed.id} className="seed-list-div" style={{backgroundImage: `url(${seed.img})`}} onClick={toggleSeedDisplay}>   
                            <div className="seed-list-text-div"><h3>{seed.name}</h3></div>
                            {seedDisplay ? <div className="seed-description"><p><strong>Description: </strong>{seed.description}</p><p><strong>Days to Maturity: </strong>{seed.maturity}</p></div>: null}
                        </div>
                ))}
            </div>

        </div>
    )
}

export default Categories