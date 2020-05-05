import React from 'react';

import './NotFound.css';
const NotFound = () => {
    const errorTextStyle = {
        color:"black",
        width:"695px",
        
        margin:"0 auto",
        backgroundColor:"white",
        textAlign:"center",
        fontSize:"40px",
        fontFamily:"Algerian",
        borderRadius:"50px"
    }
    return (
        <div className="error-section">
            <h1 style={errorTextStyle}>Please Check your path or URL</h1>
        </div>
    );
};

export default NotFound;