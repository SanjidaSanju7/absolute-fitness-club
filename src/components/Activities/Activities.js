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

        <div className='club'>
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
                    <div className="cart">
                        <h4>Sanjida Islam Sanju</h4>
                        <p>React.Js Developer</p>
                        <p>Age: 25</p>
                        <hr />
                    </div>
                    <h3>Add a Break</h3>
                    <div className='break-button'>
                        <button>10s</button>
                        <button>30s</button>
                        <button>20s</button>
                        <button>40s</button>
                        <hr />
                    </div>
                    <h3>Exercise Details</h3>
                    <div className="exercise-details">
                        <h3>Exercise Time: 00</h3>
                        <h3>Break Time: </h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Activities;