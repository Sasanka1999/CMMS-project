// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { createSkill, getSkill, updateSkill } from '../../services/SkillsServices';

const SkillsComponents = () => {
  const [skillName, setSkillName] = useState('');
  const { skillId } = useParams();
  const [errors, setErrors] = useState({
    skillName: '',
  });
  const navigator = useNavigate();

  useEffect(() => {
    if (skillId) {
      getSkill(skillId)
        .then((response) => {
          setSkillName(response.data.skillName);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [skillId]);

  function saveOrUpdateSkill(e) {
    e.preventDefault();

    if (validateForm()) {
      const skill = { skillName };
      console.log(skill);

      if (skillId) {
        updateSkill(skillId, skill)
          .then((response) => {
            console.log(response.data);
            navigator('/skills');
          })
          .catch((error) => {
            console.error(error);
          });
      } else {
        createSkill(skill)
          .then((response) => {
            console.log(response.data);
            navigator('/skills');
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

    if (skillName.trim()) {
      errorsCopy.skillName = '';
    } else {
      errorsCopy.skillName = 'Skill name is required';
      valid = false;
    }

    setErrors(errorsCopy);
    return valid;
  }

  function pageTitle() {
    if (skillId) {
      return <h2 className='text-center'>Update Skill</h2>;
    } else {
      return <h2 className='text-center'>Add Skill</h2>;
    }
  }

  return (
    <div className='container'>
      <br />
      <br />
      <div className='rew'>
        <div className='card col-md-6 offset-md-3 offset-mid-3'>
          {pageTitle()}
          <div className='card-body'>
            <form>
              <div className='form-group mb-2'>
                <label className='from-label' htmlFor='skillName'>
                  Skill Name:
                </label>
                <input
                  type='text'
                  placeholder='Enter Skill Name'
                  name='skillName'
                  className={`form-control ${errors.skillName ? 'is-invalid' : ''}`}
                  value={skillName}
                  onChange={(e) => setSkillName(e.target.value)}
                />
                {errors.skillName && <div className='invalid-feedback'>{errors.skillName}</div>}
              </div>
              <button className='btn btn-success' onClick={saveOrUpdateSkill}>
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsComponents;
