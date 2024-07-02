// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getUser } from '../../services/UserServices';
import backgroundImage from '../../assets/05.png'; // Ensure you have a suitable image in the specified path

const UserLoginComponent = () => {
    const [userId, setUserId] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        setError(''); // Clear previous error messages

        try {
            // Check if userId starts with "ALANKAA0"
            if (!userId.trim().startsWith('ALANKAA0')) {
                setError('Incorrect userid or password');
                return;
            }

            // Remove "ALANKAA0" prefix from the user-entered user ID
            const userIdInput = userId.trim().replace(/^ALANKAA0/, '');

            const response = await getUser(userIdInput); // Fetch user by userId without "ALANKAA0"
            const user = response.data;

            if (user && user.password === password) {
                // Successful login, set user role and navigate to dashboard
                localStorage.setItem('userRole', 'user');
                navigate('/dashboard');
            } else {
                setError('Incorrect userid or password');
            }
        } catch (error) {
            setError('Error logging in'); // Handle fetch error
        }
    };

    return (
        <div style={{ 
            backgroundImage: `url(${backgroundImage})`, 
            backgroundSize: 'cover', 
            backgroundPosition: 'center', 
            height: '100vh', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center' 
        }}>
            <div className="card" style={{ width: '400px', backgroundColor: 'rgba(255, 255, 255, 0.8)' }}>
                <div className="card-body">
                    <h2 className="card-title text-center mb-4">User Login</h2>
                    {error && <div className="alert alert-danger">{error}</div>}
                    <form onSubmit={handleLogin}>
                        <div className="form-group">
                            <label htmlFor="userId">User ID:</label>
                            <input
                                type="text"
                                id="userId"
                                className="form-control"
                                value={userId}
                                onChange={(e) => setUserId(e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password:</label>
                            <input
                                type="password"
                                id="password"
                                className="form-control"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>
                        <br />
                        <div className="text-center">
                            <button type="submit" className="btn btn-primary">
                                Login
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UserLoginComponent;
