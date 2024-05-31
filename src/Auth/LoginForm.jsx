import  { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import "./styles/Loginform.scss";

const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [users] = useState([
        { username: 'testuser', password: 'testpass' }
    ]);
    const [error, setError] = useState('');

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        const user = users.find(user => user.username === username && user.password === password);

        if (user) {
            navigate('/home');
        } else {
            setError('Invalid username or password');
        }
    };

    return (
        <div className='loginform'>
            <div className="wrapper">
                <form className='form' onSubmit={handleSubmit}>
                    <h2 className='login-title'>Log In</h2>
                    {error && <div className="error-message">{error}</div>}
                    <div className="input-container">
                        <label htmlFor="username">
                            UserName
                        </label>
                        <div className="inner-input-container">
                            <input
                                type="text"
                                name='username'
                                placeholder='Enter your username'
                                className='form-input'
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                        </div>
                        <span></span>
                    </div>

                    <div className="input-container">
                        <label htmlFor="password">
                            Password
                        </label>
                        <div className="inner-input-container">
                            <input
                                type="password"
                                name='password'
                                placeholder='Enter your password'
                                className='form-input'
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <span></span>
                    </div>

                    <div className='acc-links'>
                        <div className='signup-link'>
                            <span>Dont have an account?</span>
                            <Link to='/signup'>Sign Up</Link>
                        </div>
                    </div>

                    <div className='button-container'>
                        <button type='submit' className='submit-button'>Log in</button>
                    </div>
                </form>

                <div className="message-card">
                    <h2 className='login-message'>Welcome back User!</h2>
                    <Link to='/' className='home-link'><FiArrowLeft />HomePage</Link>
                </div>
            </div>
        </div>
    )
}

export default LoginForm;
