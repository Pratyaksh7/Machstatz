import React from 'react';
import './User.css';


const User = (props) => {
    return (
        <div className="user">
            <h3>{props.user.username}</h3>
            <button className="btn btn-sm btn-secondary">Edit</button>
            <button className="btn btn-sm btn-danger">Delete</button>   
            
        </div>
    )
}

export default User;
