// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { deleteTechnicianSkill, listTechnicianSkills } from "../../services/TechnicianSkillsService";

const ListTechnicianSkillsComponents = () => {
    const [technicianSkills, setTechnicianSkills] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        getAllTechnicianSkills();
    }, []);

    function getAllTechnicianSkills() {
        listTechnicianSkills()
            .then((response) => {
                setTechnicianSkills(response.data);
            })
            .catch((error) => {
                console.error(error);
            });
    }

    function addTechnicianSkill() {
        navigate("/add-technician-skill");
    }

    function removeTechnicianSkill(technicianId, skillId) {
        deleteTechnicianSkill(technicianId, skillId)
            .then(() => {
                getAllTechnicianSkills(); // Refresh the technician skills list after deletion
            })
            .catch((error) => {
                console.error(error);
            });
    }

    return (
        <div className="container">
            <h2 className="text-center">List of Technician Skills</h2>
            <button className="btn btn-primary mb-2" onClick={addTechnicianSkill}>
                Add Technician Skill
            </button>
            <table className="table table-striped table-bordered">
                <thead>
                    <tr>
                        <th>Technician ID</th>
                        <th>Skill ID</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {technicianSkills.map((skill) => (
                        <tr key={`${skill.technicianId}-${skill.skillId}`}>
                            <td>{skill.technicianId}</td>
                            <td>{skill.skillId}</td>
                            <td>
                                <button
                                    className="btn btn-danger"
                                    onClick={() => removeTechnicianSkill(skill.technicianId, skill.skillId)}
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

export default ListTechnicianSkillsComponents;
