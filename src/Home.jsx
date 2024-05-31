// eslint-disable-next-line no-unused-vars
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();

    const handleSignOut = () => {
        navigate('/');
    };

    return (
        <div style={{fontSize: "2em", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center"}}>
            Logged in successfully
            <button 
                onClick={handleSignOut} 
                style={{
                    marginTop: "20px", 
                    padding: "10px 10px", 
                    fontSize: "0.5em",
                    cursor: "pointer"
                }}
            >
                Sign Out
            </button>
        </div>
    )
}

export default Home;
