import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { request, setAuthHeader } from './axios_helper';
import { useNotificationContext } from './NotificationContext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const RegisterComponent = ({ onRegister }) => {
    const navigate = useNavigate();
    const { updateMessage } = useNotificationContext();
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleRegister = (e) => {
        e.preventDefault();
        if (firstName === "" || lastName === "" || username === "" || password === "") {
            toast.error("Please fill in all fields.");
            return;
        }

        // Perform register logic
        request("POST", "/register", {
            firstName: firstName,
            lastName: lastName,
            login: username,
            password: password
        })
        .then((response) => {
            // Handle successful registration
            updateMessage('User registered successfully');       
            navigate('/login');
            //toast('Success')
            onRegister(); // Assuming this function navigates to the login page
        })
        .catch((error) => {
            // Handle registration error
            console.error("Registration error:", error);
            toast.error("Registration failed. Please try again.");
        });
    };

    return (
        <div className="row" style={{ display: "flex", justifyContent: "center", paddingTop: "7vh" }}>
            <div className="col-4">
                <form onSubmit={handleRegister}>
                    <div className="form-outline mb-4">
                        <label className="form-label" htmlFor="firstName">First name</label>
                        <input type="text" id="firstName" name="firstName" className="form-control" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                    </div>

                    <div className="form-outline mb-4">
                        <label className="form-label" htmlFor="lastName">Last name</label>
                        <input type="text" id="lastName" name="lastName" className="form-control" value={lastName} onChange={(e) => setLastName(e.target.value)} />
                    </div>

                    <div className="form-outline mb-4">
                        <label className="form-label" htmlFor="login">Username</label>
                        <input type="text" id="login" name="login" className="form-control" value={username} onChange={(e) => setUsername(e.target.value)} />
                    </div>

                    <div className="form-outline mb-4">
                        <label className="form-label" htmlFor="registerPassword">Password</label>
                        <input type="password" id="registerPassword" name="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>

                    <div className="text-center">
                        <button type="submit" className="btn btn-primary btn-block mb-3">Register</button>
                    </div>
                </form>
                <p className="text-center">Already have an account? <Link to="/login" style={linkStyle}>Login</Link></p>
            </div>
            <ToastContainer />
        </div>
    );
};

const linkStyle = {
    color: 'inherit',
    textDecoration: 'none',
    padding: '5px 10px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    background: 'none',
    cursor: 'pointer',
};

export default RegisterComponent;
