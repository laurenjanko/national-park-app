import React, {useState, useEffect} from 'react'
import './Parks.css'

const parkInfoURL = "https://developer.nps.gov/api/v1/parks?parkCode=acad&api_key=WaKkmlfgbOg9OwQkoHOOKLW89LedGlCEnJ5u90Z4"

const parks = () =>{
    const [parkData, setData] = useState({});

    useEffect(() => {
        getParkWithFetch();
    }, []);

    const getParkWithFetch = async () => {
        const response = await fetch(parkInfoURL);
        const jsonData = await response.json();
        setData(jsonData);
    };

    return (
        <div>
            <div className="parks section_margin" id="parks">
                <div className="parks-feature-title">
                    <h1> National Parks</h1>
                </div>
                <div className="parks-feature-text">
                    <p>Scroll through to find out more information about
                        different national parks!
                    </p>
                </div>

                <div className = "park-container">
                    <h5 className='park-item'>{parkData.name}</h5>
                    <h5 className='park-item'>{parkData.location}</h5>
                    <h5 className='park-item'>{parkData.description}</h5>
                </div>
            </div>
        </div>
    )
}

export default parks
