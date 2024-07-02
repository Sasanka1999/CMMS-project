// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { deleteMaintenanceHistory, listMaintenanceHistory } from '../../services/MaintenanceHistoryService';

const ListMaintenanceHistoryComponents = () => {
    const [maintenanceHistory, setMaintenanceHistory] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        getAllMaintenanceHistory();
    }, []);

    function getAllMaintenanceHistory() {
        listMaintenanceHistory()
            .then((response) => {
                setMaintenanceHistory(response.data);
            })
            .catch((error) => {
                console.error('Error fetching maintenance history:', error);
                // Display error message to the user
            });
    }

    function addNewMaintenanceHistory() {
        navigate('/add-maintenance-history');
    }

    function updateMaintenanceHistory(historyId) {
        navigate(`/edit-maintenance-history/${historyId}`);
    }

    function removeMaintenanceHistory(historyId) {
        console.log(historyId);
        deleteMaintenanceHistory(historyId)
            .then(() => {
                getAllMaintenanceHistory(); // Refresh maintenance history after deletion
            })
            .catch((error) => {
                console.error('Error deleting maintenance history:', error);
                // Display error message to the user
            });
    }

    return (
        <div className="container">
            <h2 className="text-center">List of Maintenance History</h2>
            <button className="btn btn-primary mb-2" onClick={addNewMaintenanceHistory}>
                Add Maintenance History
            </button>
            <table className="table table-striped table-bordered">
                <thead>
                    <tr>
                        <th>History ID</th>
                        <th>Asset ID</th>
                        <th>Maintenance Date</th>
                        <th>Description</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {maintenanceHistory.map((history) => (
                        <tr key={history.historyId}>
                            <td>{history.historyId}</td>
                            <td>{history.assetId}</td>
                            <td>{history.maintenanceDate}</td>
                            <td>{history.description}</td>
                            <td>
                                <button className="btn btn-info me-2" onClick={() => updateMaintenanceHistory(history.historyId)}>
                                    Update
                                </button>
                                <button className="btn btn-danger me-2" onClick={() => removeMaintenanceHistory(history.historyId)}>
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

export default ListMaintenanceHistoryComponents;
