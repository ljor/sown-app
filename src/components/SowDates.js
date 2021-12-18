import React, {useState, useEffect} from 'react'
import axios from 'axios'

function SowDates(seedData, zipcode) {
    const [lastFrostDate, setLastFrostDate] = useState(null)

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_URL_BASE}${48931}${process.env.REACT_APP_API_URL_TAIL}`, {
            headers: {
                token: `${process.env.REACT_APP_WEB_TOKEN}`
            }
        })
          .then(response => console.log(response))
          .catch(error => console.log(error))
    }, [zipcode])

    const dateFromDay = (year, day) => {
        const date = new Date(year, 0)
        return new Date(date.setDate(day))
    }
    return (
        <div>
            <h1>Heyo</h1>
        </div>
    )
}

export default SowDates
