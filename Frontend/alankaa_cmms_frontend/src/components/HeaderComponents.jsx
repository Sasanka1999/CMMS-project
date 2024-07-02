// src/components/HeaderComponents.jsx
// eslint-disable-next-line no-unused-vars
import React, { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { NotificationContext } from '../contexts/NotificationContext';
import '../App.css'; // Import the CSS file

const HeaderComponents = () => {
    const location = useLocation();
    const { notifications, removeNotification } = useContext(NotificationContext);

    const hiddenRoutes = ['/admin-login', '/user-login', '/'];
    const shouldShowNavbar = !hiddenRoutes.includes(location.pathname);

    const userRole = localStorage.getItem('userRole');

    if (!shouldShowNavbar) {
        return null;
    }

    const handleNotificationClick = (index) => {
        removeNotification(index);
    };

    return (
        <div>
            <header>
                <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
                    <Link className='navbar-brand' to='/'>
                        Alankaa CMMS
                    </Link>
                    <button
                        className='navbar-toggler'
                        type='button'
                        data-toggle='collapse'
                        data-target='#navbarNav'
                        aria-controls='navbarNav'
                        aria-expanded='false'
                        aria-label='Toggle navigation'
                    >
                        <span className='navbar-toggler-icon'></span>
                    </button>
                    <div className='collapse navbar-collapse' id='navbarNav'>
                        <ul className='navbar-nav ml-auto'>
                            {userRole === 'admin' && (
                                <li className='nav-item'>
                                    <Link className='nav-link' to='/admin-dashboard'>
                                        Admin Dashboard
                                    </Link>
                                </li>
                            )}
                            {userRole === 'user' && (
                                <li className='nav-item'>
                                    <Link className='nav-link' to='/dashboard'>
                                        Dashboard
                                    </Link>
                                </li>
                            )}
                            <li className='nav-item'>
                                <Link className='nav-link' to='/assets'>
                                    Assets
                                </Link>
                            </li>
                            <li className='nav-item'>
                                <Link className='nav-link' to='/inventory-items'>
                                    Inventory Items
                                </Link>
                            </li>
                            <li className='nav-item'>
                                <Link className='nav-link' to='/maintenance-history'>
                                    Maintenance History
                                </Link>
                            </li>
                            <li className='nav-item'>
                                <Link className='nav-link' to='/technicians'>
                                    Technicians
                                </Link>
                            </li>
                            <li className='nav-item'>
                                <Link className='nav-link' to='/skills'>
                                    Skills
                                </Link>
                            </li>
                            <li className='nav-item'>
                                <Link className='nav-link' to='/work-orders'>
                                    Work Orders
                                </Link>
                            </li>
                            <li className='nav-item'>
                                <Link className='nav-link' to='/preventive-schedules'>
                                    Preventive Schedules
                                </Link>
                            </li>
                            <li className='nav-item'>
                                <Link className='nav-link' to='/utilized-parts'>
                                    Utilized Parts
                                </Link>
                            </li>
                            <li className='nav-item'>
                                <Link className='nav-link' to='/technician-skills'>
                                    Technician Skills
                                </Link>
                            </li>

                            <li className='nav-item dropdown'>
                                <button
                                    className='btn btn-secondary dropdown-toggle'
                                    type='button'
                                    id='notificationsDropdown'
                                    data-toggle='dropdown'
                                    aria-haspopup='true'
                                    aria-expanded='false'
                                >
                                    <i className='bi bi-bell'></i> 
                                    <span className='badge badge-danger'>{notifications.length}</span>
                                </button>
                                <div className='dropdown-menu dropdown-menu-right' aria-labelledby='notificationsDropdown'>
                                    {notifications.length === 0 ? (
                                        <span className='dropdown-item'>No new notifications</span>
                                    ) : (
                                        notifications.map((notification, index) => (
                                            <span
                                                key={index}
                                                className='dropdown-item'
                                                onClick={() => handleNotificationClick(index)}
                                            >
                                                {notification}
                                            </span>
                                        ))
                                    )}
                                </div>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>
        </div>
    );
};

export default HeaderComponents;
