// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { deleteSkill, listSkills } from "../../services/SkillsServices";

const ListSkillsComponents = () => {
  const [skills, setSkills] = useState([]);
  const navigator = useNavigate();

  useEffect(() => {
    getAllSkills();
  }, []);

  function getAllSkills() {
    listSkills()
      .then((response) => {
        setSkills(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  function addNewSkill() {
    navigator("/add-skill");
  }

  function updateSkill(skillId) {
    navigator(`/edit-skill/${skillId}`);
  }

  function removeSkill(skillId) {
    console.log(skillId);
    deleteSkill(skillId)
      // eslint-disable-next-line no-unused-vars
      .then((response) => {
        getAllSkills();
      })
      .catch((error) => {
        console.error(error);
      });
  }

  return (
    <div className="container">
      <h2 className="text-center">List of Skills</h2>
      <button className="btn btn-primary mb-2" onClick={addNewSkill}>
        Add Skill
      </button>
      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            <th>Skill ID</th>
            <th>Skill Name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {skills.map((skill) => (
            <tr key={skill.skillId}>
              <td>{skill.skillId}</td>
              <td>{skill.skillName}</td>
              <td>
                <button
                  className="btn btn-info"
                  onClick={() => updateSkill(skill.skillId)}
                >
                  Update
                </button>
                <button
                  className="btn btn-danger"
                  onClick={() => removeSkill(skill.skillId)}
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

export default ListSkillsComponents;
