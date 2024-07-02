// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { createUser, getUser, updateUser  } from '../../services/UserServices'; 

const UserComponents = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('');

    const { userId } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        if (userId) {
            getUser(userId)
                .then((response) => {
                    setUsername(response.data.username);
                    setPassword(response.data.password);
                    setRole(response.data.role);
                })
                .catch((error) => {
                    console.error(error);
                });
        }
    }, [userId]);

    function saveOrUpdateUser(e) {
        e.preventDefault();

        const user = { username, password, role };

        if (userId) {
            updateUser(userId, user)
                .then((response) => {
                    console.log(response.data);
                    navigate('/users');
                })
                .catch((error) => {
                    console.error(error);
                });
        } else {
            createUser(user)
                .then((response) => {
                    console.log(response.data);
                    navigate('/users');
                })
                .catch((error) => {
                    console.error(error);
                });
        }
    }

    return (
        <div className="container">
            <br />
            <div className="row">
                <div className="card col-md-6 offset-md-3 offset-md-3">
                    <h3 className="text-center">{userId ? 'Update User' : 'Add User'}</h3>
                    <div className="card-body">
                        <form>
                            <div className="form-group">
                                <label>Username:</label>
                                <input
                                    type="text"
                                    placeholder="Enter Username"
                                    className="form-control"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                />
                            </div>
                            <div className="form-group">
                                <label>Password:</label>
                                <input
                                    type="password"
                                    placeholder="Enter Password"
                                    className="form-control"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>
                            <div className="form-group">
                                <label>Role:</label>
                                <input
                                    type="text"
                                    placeholder="Enter Role"
                                    className="form-control"
                                    value={role}
                                    onChange={(e) => setRole(e.target.value)}
                                />
                            </div>

                            <button className="btn btn-success" onClick={saveOrUpdateUser}>
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserComponents;
