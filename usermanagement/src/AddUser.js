import axios from 'axios';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const createUserUrl = "http://15.207.229.231:8000/machstatz/add_new_user";

function AddUser() {
    const [email, setEmail] = useState('');
    const [first_name, setfirst_name] = useState('');
    const [last_name, setlast_name] = useState('');
    const [pwd, setPwd] = useState('');
    const [username, setUsername] = useState('');

    const [status, setstatus] = useState('');
    const [message, setmessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        
        const formData = {
            email: email,
            first_name: first_name,
            last_name: last_name,
            pwd: pwd,
            username: username,
        };

        axios.post(createUserUrl,formData).then(res => {
            setstatus(res.data.status);
            setmessage(res.data.message);
             console.log("status",status);
             console.log("message",message);
        })
    }

    return (
        <>
            <Link to="/" className="btn btn-primary">Back to the User Dashboard</Link>
            <div>
                {   status !== '' && message !== '' && <>
                        <strong style={{backgroundColor: "aqua"}}>Message: {message}</strong>
                        <br />
                        <strong style={{backgroundColor: "aqua"}}>Status: {status}</strong>
                    </>
                }
                
                <h2>Add User</h2>
                <form>
                    <div className="row mb-4">
                        <div className="col">
                            <input type="text" value={first_name} onChange={(e)=>setfirst_name(e.target.value)} className="form-control" placeholder="First name" />
                        </div>
                        <div className="col">
                            <input type="text" value={last_name} onChange={(e)=>setlast_name(e.target.value)} className="form-control" placeholder="Last name" />
                        </div>
                    </div>
                    <div className="row mb-4">
                        <div className="col">
                            <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} className="form-control" placeholder="Email" />
                        </div>
                        <div className="col">
                            <input type="password" value={pwd} onChange={(e)=>setPwd(e.target.value)} className="form-control" placeholder="Password" />
                        </div>
                    </div>
                    <div className="row mb-4">
                        <div className="col">
                            <input type="text" value={username} onChange={(e)=>setUsername(e.target.value)} className="form-control" placeholder="Username" />
                        </div>
                    </div>
                    <button className="btn btn-md btn-success" type="submit" onClick={handleSubmit}>Add</button>
                    
                </form>
            </div>
        </>
    )
}

export default AddUser
