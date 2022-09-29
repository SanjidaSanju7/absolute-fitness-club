import React from 'react';
import './Activity.css'



const Activity = ({ activity, handleAddToList }) => {
    const { img, name, description, age, time } = activity;


    return (
        <div className='single-card'>
            <img src={img} alt="" />
            <div className='card-info'>
                <h3>Name: {name}</h3>
                <p>Description:  {description.length > 80 ? description.slice(0, 80) + '....' : description}</p>
                <p><small>Age: {age}</small></p>
                <p><small>Time: {time}s</small></p>
            </div>
            <button onClick={() => handleAddToList(activity)} className='card-button'>Add to List</button>
        </div>
    );
};

export default Activity;