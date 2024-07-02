// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { createTechnician, getTechnician, updateTechnician } from "../../services/TechnicianService";

const TechniciansComponents = () => {
    const [technicianName, setTechnicianName] = useState("");
    const [errors, setErrors] = useState({
        technicianName: "",
    });

    const { technicianId } = useParams();
    const navigator = useNavigate();

    useEffect(() => {
        if (technicianId) {
            getTechnician(technicianId)
                .then((response) => {
                    setTechnicianName(response.data.technicianName);
                })
                .catch((error) => {
                    console.error(error);
                });
        }
    }, [technicianId]);

    function saveOrUpdateTechnician(e) {
        e.preventDefault();

        if (validateForm()) {
            const technician = { technicianName };
            console.log(technician);

            if (technicianId) {
                updateTechnician(technicianId, technician)
                    .then((response) => {
                        console.log(response.data);
                        navigator("/technicians");
                    })
                    .catch((error) => {
                        console.error(error);
                    });
            } else {
                createTechnician(technician)
                    .then((response) => {
                        console.log(response.data);
                        navigator("/technicians");
                    })
                    .catch((error) => {
                        console.error(error);
                    });
            }
        }
    }

    function validateForm() {
        let valid = true;
        const errorsCopy = { ...errors };

        if (technicianName.trim()) {
            errorsCopy.technicianName = "";
        } else {
            errorsCopy.technicianName = "Technician name is required";
            valid = false;
        }

        setErrors(errorsCopy);
        return valid;
    }

    function pageTitle() {
        if (technicianId) {
            return <h2 className="text-center">Update Technician</h2>;
        } else {
            return <h2 className="text-center">Add Technician</h2>;
        }
    }

    return (
        <div className="container">
            <br /><br />
            <div className="rew">
                <div className="card col-md-6 offset-md-3 offset-mid-3">
                    {pageTitle()}
                    <div className="card-body">
                        <form>
                            <div className="form-group mb-2">
                                <label className="from-label" htmlFor="technicianName">Technician Name:</label>
                                <input
                                    type="text"
                                    placeholder="Enter Technician Name"
                                    name="technicianName"
                                    className={`form-control ${errors.technicianName ? "is-invalid" : ""}`}
                                    value={technicianName}
                                    onChange={(e) => setTechnicianName(e.target.value)}
                                />
                                {errors.technicianName && <div className="invalis-feedback">{errors.technicianName}</div>}
                            </div>

                            <button className="btn btn-success" onClick={saveOrUpdateTechnician}>
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TechniciansComponents;
