import axios from 'axios';
import React, { useState } from 'react';
import './User.css';
import {VscTrash} from "react-icons/vsc";

const deleteUserUrl = "http://15.207.229.231:8000/machstatz/delete_existing_user";


const User = (props) => {

    const [status, setstatus] = useState('');
    const [message, setmessage] = useState('');

    const handleDelete = (email) => {
        axios.delete(deleteUserUrl, { params: {email : email}}).then(res => {
            setstatus(res.data.status);
            setmessage(res.data.message);
        })
    }

    return (
        <div className="user">
            {   status !== '' && message !== '' && <>
                    <strong style={{backgroundColor: "aqua"}}>Message: {message}</strong>
                    <br />
                    <strong style={{backgroundColor: "aqua"}}>Status: {status}</strong>
                </>
            }
            <h3>{props.user.username}</h3>
            <VscTrash style={{color: "red"}} onClick={() => handleDelete(props.user.email)} type="button" />
            
        </div>
    )
}

export default User;
