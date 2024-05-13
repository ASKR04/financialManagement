import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { request, setAuthHeader } from './axios_helper';
import { useNavigate } from 'react-router-dom';
import { useNotificationContext } from './NotificationContext';
import { ToastContainer, toast } from 'react-toastify';
import './AuthContent.css';

const AuthContent = () => {
    const [data, setData] = useState([]);
    const { updateMessage } = useNotificationContext();
    const { message } = useNotificationContext();
    const navigate = useNavigate();


    useEffect(() => {
        const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
        if (message) {
            toast(message);
          }
        if (!isLoggedIn) {
            navigate('/login');
        }
    }, [navigate],[message]);

    const handleLogout = () => {
        updateMessage('User logged out successfully');
        setAuthHeader(null);
        localStorage.setItem('isLoggedIn', 'false');
        navigate('/login');
    };

    const buttons = [
        { label: 'Microservice 1', url: '/microservice1' },
        { label: 'Microservice 2', url: '/microservice2' },
        { label: 'Microservice 3', url: '/microservice3' },
        { label: 'Microservice 4', url: '/microservice4' },
        { label: 'Microservice 5', url: '/microservice5' },
        { label: 'Microservice 6', url: '/microservice6' },
        { label: 'Microservice 7', url: '/microservice7' },
        { label: 'Microservice 8', url: '/microservice8' },
    ];

    const handleButtonClick = (url) => {
        navigate(url);
    };

    useEffect(() => {
        request("GET", "/messages", {})
            .then((response) => {
                console.log(typeof (response.data));
                setData(response.data);
            })
            .catch((error) => {
                if (error.response.status === 401) {
                    setAuthHeader(null);
                } else {
                    setData(error.response.code);
                }
            });
    }, []);

/*    const handleLogout = () => {
        setAuthHeader(null);
    };
*/
return (
    <div className="row" style={{ display: "flex", justifyContent: "center", paddingRight:"85vh", alignItems: "center", height: "75vh" }}>
      <div className="col-4">
        <div className="auth-content">
          <div className="grid-container" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gridGap: '25px' }}> {/* Grid styles */}
            {buttons.map((button, index) => (
              <button key={index} onClick={() => handleButtonClick(button.url)} className="custom-btn">{button.label}</button>
            ))}
          </div>
          <Link to="/login" className="logout-btn" onClick={handleLogout}>Logout</Link>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default AuthContent;
