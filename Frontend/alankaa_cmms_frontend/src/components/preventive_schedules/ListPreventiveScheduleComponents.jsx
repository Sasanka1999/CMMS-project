// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { deletePreventiveSchedule, listPreventiveSchedules } from "../../services/PreventiveScheduleService";

const ListPreventiveScheduleComponents = () => {
    const [schedules, setSchedules] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        getAllSchedules();
    }, []);

    function getAllSchedules() {
        listPreventiveSchedules()
            .then((response) => {
                setSchedules(response.data);
            })
            .catch((error) => {
                console.error(error);
            });
    }

    function addSchedule() {
        navigate("/add-schedule");
    }

    function editSchedule(scheduleId) {
        navigate(`/edit-schedule/${scheduleId}`);
    }

    function removeSchedule(scheduleId) {
        console.log(scheduleId);
        deletePreventiveSchedule(scheduleId)
            .then(() => {
                getAllSchedules(); // Refresh the schedule list after deletion
            })
            .catch((error) => {
                console.error(error);
            });
    }

    return (
        <div className="container">
            <h2 className="text-center">List of Preventive Schedules</h2>
            <button className="btn btn-primary mb-2" onClick={addSchedule}>
                Add Schedule
            </button>
            <table className="table table-striped table-bordered">
                <thead>
                    <tr>
                        <th>Schedule ID</th>
                        <th>Asset ID</th>
                        <th>Task</th>
                        <th>Frequency</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {schedules.map((schedule) => (
                        <tr key={schedule.scheduleId}>
                            <td>{schedule.scheduleId}</td>
                            <td>{schedule.assetId}</td>
                            <td>{schedule.task}</td>
                            <td>{schedule.frequency}</td>
                            <td>
                                <button
                                    className="btn btn-info"
                                    onClick={() => editSchedule(schedule.scheduleId)}
                                >
                                    Edit
                                </button>
                                <button
                                    className="btn btn-danger"
                                    onClick={() => removeSchedule(schedule.scheduleId)}
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

export default ListPreventiveScheduleComponents;
