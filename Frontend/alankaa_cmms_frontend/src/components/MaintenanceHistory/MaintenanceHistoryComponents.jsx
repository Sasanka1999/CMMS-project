// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { createMaintenanceHistory, getMaintenanceHistory, updateMaintenanceHistory } from '../../services/MaintenanceHistoryService';

const MaintenanceHistoryComponents = () => {
    const [assetId, setAssetId] = useState('');
    const [maintenanceDate, setMaintenanceDate] = useState('');
    const [description, setDescription] = useState('');

    const { historyId } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        if (historyId) {
            getMaintenanceHistory(historyId)
                .then((response) => {
                    setAssetId(response.data.assetId);
                    setMaintenanceDate(response.data.maintenanceDate);
                    setDescription(response.data.description);
                })
                .catch((error) => {
                    console.error('Error fetching maintenance history:', error);
                    // Display error message to the user
                });
        }
    }, [historyId]);

    function saveOrUpdateMaintenanceHistory(e) {
        e.preventDefault();

        const history = { assetId, maintenanceDate, description };

        if (historyId) {
            updateMaintenanceHistory(historyId, history)
                .then(() => {
                    navigate('/maintenance-history');
                })
                .catch((error) => {
                    console.error('Error updating maintenance history:', error);
                    // Display error message to the user
                });
        } else {
            createMaintenanceHistory(history)
                .then(() => {
                    navigate('/maintenance-history');
                })
                .catch((error) => {
                    console.error('Error creating maintenance history:', error);
                    // Display error message to the user
                });
        }
    }

    return (
        <div className="container">
            <br /><br />
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <div className="card">
                        <div className="card-body">
                            <h2 className="text-center">{historyId ? 'Update Maintenance History' : 'Add Maintenance History'}</h2>
                            <form>
                                <div className="form-group">
                                    <label>Asset ID:</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Enter Asset ID"
                                        value={assetId}
                                        onChange={(e) => setAssetId(e.target.value)}
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Maintenance Date:</label>
                                    <input
                                        type="date"
                                        className="form-control"
                                        value={maintenanceDate}
                                        onChange={(e) => setMaintenanceDate(e.target.value)}
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Description:</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Enter Description"
                                        value={description}
                                        onChange={(e) => setDescription(e.target.value)}
                                    />
                                </div>
                                <button className="btn btn-success" onClick={saveOrUpdateMaintenanceHistory}>
                                    {historyId ? 'Update' : 'Create'}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MaintenanceHistoryComponents;
