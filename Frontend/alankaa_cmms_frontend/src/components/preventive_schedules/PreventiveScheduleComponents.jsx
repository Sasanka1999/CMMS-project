// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { createPreventiveSchedule, getPreventiveScheduleById, updatePreventiveSchedule } from '../../services/PreventiveScheduleService';

const PreventiveScheduleComponents = () => {
    const [task, setTask] = useState('');
    const [frequency, setFrequency] = useState('');
    const [assetId, setAssetId] = useState('');

    const { scheduleId } = useParams();
    const navigator = useNavigate();

    useEffect(() => {
        if (scheduleId) {
            getPreventiveScheduleById(scheduleId)
                .then((response) => {
                    setTask(response.data.task);
                    setFrequency(response.data.frequency);
                    setAssetId(response.data.assetId); // Assuming response contains assetId
                })
                .catch((error) => {
                    console.error('Error fetching preventive schedule:', error);
                    // Display error message to the user
                });
        }
    }, [scheduleId]);

    function saveOrUpdatePreventiveSchedule(e) {
        e.preventDefault();

        const preventiveSchedule = { task, frequency, assetId };

        if (scheduleId) {
            updatePreventiveSchedule(scheduleId, preventiveSchedule)
                .then(() => {
                    navigator('/preventive-schedules');
                })
                .catch((error) => {
                    console.error('Error updating preventive schedule:', error);
                    // Display error message to the user
                });
        } else {
            createPreventiveSchedule(preventiveSchedule)
                .then(() => {
                    navigator('/preventive-schedules');
                })
                .catch((error) => {
                    console.error('Error creating preventive schedule:', error);
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
                            <h2 className="text-center">{scheduleId ? 'Update Preventive Schedule' : 'Add Preventive Schedule'}</h2>
                            <form>
                                {/* Add Asset ID input field */}
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
                                    <label>Task:</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Enter Task"
                                        value={task}
                                        onChange={(e) => setTask(e.target.value)}
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Frequency:</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Enter Frequency"
                                        value={frequency}
                                        onChange={(e) => setFrequency(e.target.value)}
                                    />
                                </div>
                                <br/>
                                <button className="btn btn-success" onClick={saveOrUpdatePreventiveSchedule}>
                                    {scheduleId ? 'Update' : 'Create'}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PreventiveScheduleComponents;
