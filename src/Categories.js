import './App.css'
import React, { useState, useEffect } from 'react'
import axios from 'axios'

function Categories() {
    const [seedData, setSeedData] = useState([])

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_BASE_URL}/api/v1/seeds/`)
            .then(response => setSeedData(response.data.data))
    }, [])

    return (
        <div>
            <div className='seed-container'>
                {seedData.map(seed => (
                        <div key={seed.id} className='seed-list-div' style={{backgroundImage: `url(${seed.img})`}}>
                            
                            {seed.name}
                        </div>
                ))}
            </div>
        </div>
    )
}

export default Categories