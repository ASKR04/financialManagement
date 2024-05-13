//import React, { useState } from 'react';
import { BrowserRouter , Route, Navigate, Routes } from 'react-router-dom';
//import { setAuthHeader } from './axios_helper';
import { ToastContainer, toast } from 'react-toastify';
import WelcomeContent from './Welcomecontent';
import LoginComponent from './LoginComponent';
import RegisterComponent from './RegisterComponent';
import { NotificationProvider } from './NotificationContext';
import AuthContent from './AuthContent';

const AppContent = () => {
    //const [componentToShow, setComponentToShow] = useState("welcome");
    
    /*const login = () => {
        toast.success("Login Successful",{
            position: "bottom-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    };*/

 /*   const logout = () => {
        setComponentToShow("welcome");
        setAuthHeader(null);
    };*/

    return (

        <BrowserRouter>
            <NotificationProvider>
                <Routes>
                    <Route path="/" element={<Navigate to="/welcome" />} />
                    <Route path="/welcome" element={<WelcomeContent />} />
                    <Route path="/login" element={<LoginComponent/>} />
                    <Route path="/register" element={<RegisterComponent />} />
                    <Route path="/home" element={<AuthContent />} />
                </Routes>
                <ToastContainer />
            </NotificationProvider>
        </BrowserRouter>

    );
};

export default AppContent;
