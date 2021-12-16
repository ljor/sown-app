import '../App.css'

function Categories({seedData}) {
    return (
        <div>
            <div className='seed-container'>
                {seedData.map(seed => (
                        <div key={seed.id} className='seed-list-div' style={{backgroundImage: `url(${seed.img})`}}>   
                            <div className="seed-list-text-div"><h3>{seed.name}</h3></div>
                        </div>
                ))}
            </div>
        </div>
    )
}

export default Categories