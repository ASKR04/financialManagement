import React, { useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { request, setAuthHeader } from './axios_helper';
import { ToastContainer, toast } from 'react-toastify';
import { useNotificationContext } from './NotificationContext';
import 'react-toastify/dist/ReactToastify.css';

const LoginComponent = ({ onLogin }) => {
    const navigate = useNavigate();
    const { message } = useNotificationContext();
    const { updateMessage } = useNotificationContext();
    const [username, setUsername] = React.useState("");
    const [password, setPassword] = React.useState("");

    useEffect(() => {
        if (message) {
          toast(message);
        }
      }, [message]);

    const handleLogin = (e) => {
        e.preventDefault();
        request("POST", "/login", { login: username, password: password })
            .then((response) => {
            updateMessage('User logged in successfully');
            setAuthHeader(response.data.token);
            //onLogin();
            localStorage.setItem('isLoggedIn', true); // Store login status
            navigate('/home');
            })
            .catch((error) => {
                setAuthHeader(null);
                toast.error("Login failed. Please check your credentials.", {
                    position: "bottom-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            });
    };

    return (
        <div className="row" style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "65vh" }}>
            <div className="col-4">
                <form onSubmit={handleLogin}>
                    <div className="form-outline mb-4">
                        <label className="form-label" htmlFor="loginName">Username</label>
                        <input type="text" id="loginName" name="login" className="form-control" value={username} onChange={(e) => setUsername(e.target.value)} />
                    </div>

                    <div className="form-outline mb-4">
                        <label className="form-label" htmlFor="loginPassword">Password</label>
                        <input type="password" id="loginPassword" name="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>

                    <div className="text-center">
                        <button type="submit" className="btn btn-primary btn-block mb-4">Login</button>
                    </div>
                </form>
                <p className="text-center">Don't have an account? <Link to="/register" style={linkStyle}>Register</Link></p>
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

export default LoginComponent;
