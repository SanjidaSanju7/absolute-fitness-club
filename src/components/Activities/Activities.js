import React, { useEffect, useState } from 'react';
import Activity from '../Activity/Activity';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Activities.css'

const Activities = () => {

    const [activities, setActivities] = useState([]);
    const [count, setCount] = useState([0]);


    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setActivities(data))

    }, []);


    const handleAddToList = (activity) => {
        const newCount = parseInt(count + activity.time)
        setCount(newCount);
    }


    const notify = () => toast("Congratulatios! You are done with your activity.");



    return (

        <div className='club'>
            <h1> Absolute Fitness Club</h1>
            <div className='container'>
                <div className="activities-container">
                    {
                        activities.map(activity => <Activity
                            activity={activity}
                            key={activity.id}
                            handleAddToList={handleAddToList}
                        ></Activity>)
                    }
                </div>
                <div className="cart-container">
                    <div className="cart">
                        <h3>Sanjida Islam Sanju</h3>
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
                    <div className="exercise-time">
                        <h3>Exercise Time:</h3>
                        <h3>{count}s</h3>
                    </div>
                    <div className='exercise-break'>
                        <h3>Break Time:</h3>
                        <h3>s</h3>
                    </div>
                    <hr />
                    <button className='activity-btn' onClick={notify}>Activity Completed
                        <ToastContainer></ToastContainer>
                    </button>
                </div>
            </div>
        </div >
    );
};

export default Activities;