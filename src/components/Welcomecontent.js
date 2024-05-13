import React from 'react';
import { Link } from 'react-router-dom';

const WelcomeContent = () => {
    return (
        <div className='row' style={{ display: "-webkit-flex", justifyContent: "center", alignItems: "center", height: "65vh" }}>
            <div className='col-2'>
                    <h1 className='display-4'>Welcome</h1>
                    <p className='lead' style={{paddingLeft:"20px"}}>Login to see content</p>
                    <div className="text-center" style={{paddingRight:"15px"}}>
                        <Link to="/login" className="btn btn-primary">Login</Link>
                    </div>
            </div>
        </div>
    );
};

export default WelcomeContent;
