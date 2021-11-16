import React, {useState, useEffect} from "react";
import './Parks.css';

const webCamInfo = "https://developer.nps.gov/api/v1/parks?parkCode=acad&api_key=WaKkmlfgbOg9OwQkoHOOKLW89LedGlCEnJ5u90Z4"

const webcams = () =>{
    const [webCamData, setData] = useState({});

    useEffect(() => {
        getWebCamWithFetch();
    }, []);

    const getWebCamWithFetch = async () => {
        const response = await fetch(webCamInfo);
        const jsonData = await response.json();
        setData(jsonData);
    };

    return (
        <div>
            <div className="webcam section_margin" id="webcam">
                <div className="webcams-feature-title">
                    <h1>Our current webcams</h1>
                </div>
                <div className="webcams-feature-text">
                    <p>See live time feed from different national parks across the country!
                    </p>
                </div>

                <div className = "webcams-container">
                    <h5 className='webcams-item'>{webCamData.name}</h5>
                    <h5 className='webcams-item'>{webCamData.location}</h5>
                    <h5 className='webcams-item'>{webCamData.description}</h5>
                </div>
            </div>
        </div>
    )
}
export default webcams