// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react'

import { useNavigate, useParams} from 'react-router-dom';
import { createAsset, getAsset, updateAsset } from '../../services/AssetsServices';


const AssetsComponents = () => {

        const [assetName, setAssetName] = useState('')
        const [location, setLocation] = useState('')
        const [description, setDescription] = useState('')

        const {assetId} = useParams();

        // eslint-disable-next-line no-unused-vars
        const[errors, setErrors] = useState({
            assetName: '',
            location: '',
            description: ''
        })

        // eslint-disable-next-line no-unused-vars
        const navigator = useNavigate();

        useEffect(() => {
            if (assetId) {
                getAsset(assetId)
                    .then((response) => {
                        setAssetName(response.data.assetName);
                        setLocation(response.data.location);
                        setDescription(response.data.description);
                    })
                    .catch((error) => {
                        console.error(error);
                    });
            }
        }, [assetId]);
        

        function saveOrUpdateAsset(e){
            e.preventDefault();

            if(validateForm()){

                const asset = {assetName, location, description}
                console.log(asset)

                if(assetId){
                    updateAsset(assetId, asset).then((response) => {
                        console.log(response.data);
                        navigator('/assets');
                    }).then(error => {
                        console.error(error);
                    })
                }else {
                    createAsset(asset).then((response) => {
                        console.log(response.data); 
                        navigator('/assets')
                    }).catch(error => {
                        console.error(error);
                    })
                }
            } 
        }

        // eslint-disable-next-line no-unused-vars
        function validateForm(){
            // eslint-disable-next-line no-unused-vars
            let valid = true;

            // eslint-disable-next-line no-unused-vars
            const errorsCopy = {... errors}
            
            if(assetName.trim()){
                errorsCopy.assetName = '';
            } else{
                errorsCopy.assetName = 'Aseet name is required';
                // eslint-disable-next-line no-unused-vars
                valid = false;
            }

            if(location.trim()){
                errorsCopy.location = '';
            } else{
                errorsCopy.location = 'Location is required';
                // eslint-disable-next-line no-unused-vars
                valid = false;
            }

            if(description.trim()){
                errorsCopy.description = '';
            } else{
                errorsCopy.description = 'Description is required';
                // eslint-disable-next-line no-unused-vars
                valid = false;
            }

            setErrors(errorsCopy);
            return valid;
        }

        function pageTitle(){
            if (assetId){
                return <h2 className='text-center'>Update Asset</h2>
            }else{
                return <h2 className='text-center'>Add Asset</h2>
            }
        }

  return (
    <div className='container'>
        <br/><br/>
        <div className='rew'>
            <div className='card col-md-6 offset-md-3 offset-mid-3'>
                {
                    pageTitle()
                }
                <div className='card-body'>
                    <form>
                        <div className='form-group mb-2'>
                            <label className='from-label' htmlFor="assetId">Asset Name:</label>
                            <input
                                type='text'
                                placeholder='Enter Asset Name'
                                name='assetName'
                                className={`form-control ${ errors.assetName ? 'is-invalid':''}`}
                                value={assetName}
                                onChange={(e) => setAssetName(e.target.value)}>
                            </input>
                            {errors.assetName && <div className='invalis-feedback'>{ errors.assetName}</div>}
                        </div>

                        <div className='form-group mb-2'>
                            <label className='from-label' htmlFor="assetId">Location:</label>
                            <input
                                type='text'
                                placeholder='Enter Location'
                                name='location'
                                className={`form-control ${ errors.location ? 'is-invalid':''}`}
                                value={location}
                                onChange={(e) => setLocation(e.target.value)}>
                            </input>
                            {errors.location && <div className='invalis-feedback'>{ errors.location}</div>}
                        </div>

                        <div className='form-group mb-2'>
                            <label className='from-label' htmlFor="assetId">Description:</label>
                            <input
                                type='text'
                                placeholder='Enter Description'
                                name='description'
                                className={`form-control ${ errors.description ? 'is-invalid':''}`}
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}>
                            </input>
                            {errors.description && <div className='invalis-feedback'>{ errors.description}</div>}
                        </div>

                        <button className="btn btn-success" onClick={saveOrUpdateAsset}>Submit</button>
                    </form>
                </div>
            </div>

        </div>

    </div>
  )
}

export default AssetsComponents