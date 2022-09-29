import React, { useEffect, useState } from 'react';
import Activity from '../Activity/Activity';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDumbbell } from '@fortawesome/free-solid-svg-icons';
import './Activities.css'



const Activities = () => {

    const [activities, setActivities] = useState([]);
    const [count, setCount] = useState([0]);
    const [breakTime, setBreakTime] = useState([0]);


    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setActivities(data))

    }, []);



    const handleAddToList = (activity) => {
        const newCount = parseInt(count + activity.time)
        setCount(newCount);
    }

    const handleClick = (event) => {
        const getSameValue = event.target.value;
        setBreakTime(getSameValue);

    }


    useEffect(() => {
        localStorage.setItem("breakTime", JSON.stringify(breakTime));

    }, [breakTime]);




    const notify = () => toast("Congratulatios! You are done with your activity.");


    return (

        <div className='club'>
            <h1><FontAwesomeIcon className='icon' icon={faDumbbell}></FontAwesomeIcon>Absolute Fitness Club</h1>
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
                        <button value={10} onClick={handleClick}>10s</button>
                        <button value={30} onClick={handleClick}>30s</button>
                        <button value={20} onClick={handleClick}>20s</button>
                        <button value={40} onClick={handleClick}>40s</button>
                        <hr />
                    </div>
                    <h3>Exercise Details</h3>
                    <div className="exercise-time">
                        <h3>Exercise Time:</h3>
                        <h3>{count}s</h3>
                    </div>
                    <div className='exercise-break'>
                        <h3>Break Time:</h3>
                        <h3>{breakTime}s</h3>
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