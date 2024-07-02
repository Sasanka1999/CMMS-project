// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { deleteTechnician, listTechnicians } from "../../services/TechnicianService";

const ListTechniciansComponents = () => {
    const [technicians, setTechnicians] = useState([]);
    const navigator = useNavigate();

    useEffect(() => {
        getAllTechnicians();
    }, []);

    function getAllTechnicians() {
        listTechnicians()
            .then((response) => {
                setTechnicians(response.data);
            })
            .catch((error) => {
                console.error(error);
            });
    }

    function addNewTechnician() {
        navigator("/add-technician");
    }

    function updateTechnician(technicianId) {
        navigator(`/edit-technician/${technicianId}`);
    }

    function removeTechnician(technicianId) {
        console.log(technicianId);
        deleteTechnician(technicianId)
            // eslint-disable-next-line no-unused-vars
            .then((response) => {
                getAllTechnicians();
            })
            .catch((error) => {
                console.error(error);
            });
    }

    return (
        <div className="container">
            <h2 className="text-center">List of Technicians</h2>
            <button className="btn btn-primary mb-2" onClick={addNewTechnician}>
                Add Technician
            </button>
            <table className="table table-striped table-bordered">
                <thead>
                    <tr>
                        <th>Technician ID</th>
                        <th>Technician Name</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {technicians.map((technician) => (
                        <tr key={technician.technicianId}>
                            <td>{technician.technicianId}</td>
                            <td>{technician.technicianName}</td>
                            <td>
                                <button className="btn btn-info" onClick={() => updateTechnician(technician.technicianId)}>
                                    Update
                                </button>
                                <button className="btn btn-danger" onClick={() => removeTechnician(technician.technicianId)} style={{ marginLeft: "10px" }}>
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

export default ListTechniciansComponents;
