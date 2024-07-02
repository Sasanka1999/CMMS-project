// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { deleteUser, listUsers } from "../../services/UserServices";

const ListUserComponents = () => {
    const [users, setUsers] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        getAllUsers();
    }, []);

    function getAllUsers() {
        listUsers()
            .then((response) => {
                setUsers(response.data);
            })
            .catch((error) => {
                console.error(error);
            });
    }

    function addUser() {
        navigate("/add-user");
    }

    function editUser(userId) {
        navigate(`/edit-user/${userId}`);
    }

    function removeUser(userId) {
        console.log(userId);
        deleteUser(userId)
            .then(() => {
                getAllUsers(); // Refresh the user list after deletion
            })
            .catch((error) => {
                console.error(error);
            });
    }

    return (
        <div className="container">
            <h2 className="text-center">List of Users</h2>
            <button className="btn btn-primary mb-2" onClick={addUser}>
                Add User
            </button>
            <table className="table table-striped table-bordered">
                <thead>
                    <tr>
                        <th>User ID</th>
                        <th>Username</th>
                        <th>Password</th>
                        <th>Role</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => (
                        <tr key={user.userId}>
                            <td>{user.userId}</td>
                            <td>{user.username}</td>
                            <td>{user.password}</td>
                            <td>{user.role}</td>
                            <td>
                                <button
                                    className="btn btn-info"
                                    onClick={() => editUser(user.userId)}
                                >
                                    Edit
                                </button>
                                <button
                                    className="btn btn-danger"
                                    onClick={() => removeUser(user.userId)}
                                    style={{ marginLeft: "10px" }}
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ListUserComponents;
