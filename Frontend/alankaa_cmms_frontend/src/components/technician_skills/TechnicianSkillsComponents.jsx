// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { createTechnicianSkill, getTechnicianSkillById, updateTechnicianSkill } from '../../services/TechnicianSkillsService';

const TechnicianSkillsComponents = () => {
    const [technicianId, setTechnicianId] = useState('');
    const [skillId, setSkillId] = useState('');

    const { id } = useParams(); // Assuming the route will pass both technicianId and skillId as params
    const navigate = useNavigate();

    useEffect(() => {
        if (id) {
            const [technicianId, skillId] = id.split('-');
            getTechnicianSkillById(technicianId, skillId)
                .then((response) => {
                    setTechnicianId(response.data.technicianId);
                    setSkillId(response.data.skillId);
                })
                .catch((error) => {
                    console.error('Error fetching technician skill:', error);
                    // Display error message to the user
                });
        }
    }, [id]);

    function saveOrUpdateTechnicianSkill(e) {
        e.preventDefault();

        const technicianSkill = { technicianId, skillId };

        if (id) {
            const [technicianId, skillId] = id.split('-');
            updateTechnicianSkill(technicianId, skillId, technicianSkill)
                .then(() => {
                    navigate('/technician-skills');
                })
                .catch((error) => {
                    console.error('Error updating technician skill:', error);
                    // Display error message to the user
                });
        } else {
            createTechnicianSkill(technicianSkill)
                .then(() => {
                    navigate('/technician-skills');
                })
                .catch((error) => {
                    console.error('Error creating technician skill:', error);
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
                            <h2 className="text-center">{id ? 'Update Technician Skill' : 'Add Technician Skill'}</h2>
                            <form>
                                <div className="form-group">
                                    <label>Technician ID:</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Enter Technician ID"
                                        value={technicianId}
                                        onChange={(e) => setTechnicianId(e.target.value)}
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Skill ID:</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Enter Skill ID"
                                        value={skillId}
                                        onChange={(e) => setSkillId(e.target.value)}
                                    />
                                </div>
                                <br />
                                <button className="btn btn-success" onClick={saveOrUpdateTechnicianSkill}>
                                    {id ? 'Update' : 'Create'}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TechnicianSkillsComponents;
