import React, { useEffect, useState } from 'react';
import Activity from '../Activity/Activity';
import './Activities.css'

const Activities = () => {

    const [activities, setActivities] = useState([]);

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setActivities(data))

    }, []);


    return (


        <div>
            <h1>Absolute Fitness Club</h1>
            <div className='container'>
                <div className="activities-container">
                    {
                        activities.map(activity => <Activity
                            activity={activity}
                            key={activity.id}
                        ></Activity>)
                    }
                </div>
                <div className="cart-container">
                    <h4>My Information</h4>
                </div>
            </div>
        </div>
    );
};

export default Activities;