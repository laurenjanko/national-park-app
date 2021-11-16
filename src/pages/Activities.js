import React, {useState, useEffect} from "react";
import './Activites.css';

const activityInfoURL = "https://developer.nps.gov/api/v1/parks?parkCode=acad&api_key=WaKkmlfgbOg9OwQkoHOOKLW89LedGlCEnJ5u90Z4"

const activites = () =>{
    const [activityData, setData] = useState({});

    useEffect(() => {
        getActvitiyData();
    }, []);

    const getActvitiyData = async () => {
        const response = await fetch(activityInfoURL);
        const jsonData = await response.json();
        setData(jsonData);
    };

    return (
        <div>
            <div className="activity section_margin" id="activity">
                <div className="activity-feature-title">
                    <h1>Our current webcams</h1>
                </div>
                <div className="activity-feature-text">
                    <p>See live time feed from different national parks across the country!
                    </p>
                </div>

                <div className = "activity-container">
                    <h5 className='activity-item'>{webCamData.name}</h5>
                    <h5 className='activity-item'>{webCamData.location}</h5>
                    <h5 className='activvity-item'>{webCamData.description}</h5>
                </div>
            </div>
        </div>
    )
}
export default activites
