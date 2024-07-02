// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Link } from 'react-router-dom';
import backgroundImage from '../assets/02.png';

const AlankaComponents = () => {
    return (
        <div
            className="container"
            style={{
                backgroundImage: `url(${backgroundImage})`, 
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                minHeight: '100vh', 
                minWidth:'100vw',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                msOverflowX: 'hidden',
            }}
        >
            <div
    className="row justify-content-center"
    style={{
        backgroundColor: 'rgba(255, 255, 255, 0.7)', // Transparent white background color
        padding: '20px', // Add padding for spacing
        borderRadius: '10px', // Rounded corners for the box
    }}
>
    <div className="col-md-20">
        <div>
            <div className="card-body">
                <h1 className="card-title text-center mb-4">Welcome to Alankaa CMMS</h1>
                <div className="text-center">
                    <Link to="/admin-login" className="btn btn-primary me-3">Admin Login</Link>
                    <Link to="/user-login" className="btn btn-secondary">User Login</Link>
                </div>
            </div>
        </div>
    </div>
</div>
        </div>
    );
}

export default AlankaComponents;
