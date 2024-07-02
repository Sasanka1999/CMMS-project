// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect, useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { createWorkOrder, getWorkOrderById, updateWorkOrder } from '../../services/WorkOrderService';
import { NotificationContext } from '../../contexts/NotificationContext';

const WorkOrdersComponents = () => {
    const [description, setDescription] = useState('');
    const [status, setStatus] = useState('');
    const [assetId, setAssetId] = useState('');
    const [technicianId, setTechnicianId] = useState('');
    const navigate = useNavigate();
    const { addNotification } = useContext(NotificationContext);
    const { orderId } = useParams();

    useEffect(() => {
        if (orderId) {
            getWorkOrderById(orderId)
                .then((response) => {
                    const { description, status, assetId, technicianId } = response.data;
                    setDescription(description || '');
                    setStatus(status || '');
                    setAssetId(assetId || '');
                    setTechnicianId(technicianId || '');
                })
                .catch((error) => {
                    console.error('Error fetching work order:', error);
                });
        }
    }, [orderId]);

    const saveOrUpdateWorkOrder = (e) => {
        e.preventDefault();
        const workOrder = { description, status, assetId, technicianId };

        if (orderId) {
            updateWorkOrder(orderId, workOrder)
                .then(() => {
                    addNotification(`Work Order Updated: ${description}`);
                    navigate('/work-orders');
                })
                .catch((error) => {
                    console.error('Error updating work order:', error);
                });
        } else {
            createWorkOrder(workOrder)
                .then(() => {
                    addNotification(`New Work Order Created: ${description}`);
                    navigate('/work-orders');
                })
                .catch((error) => {
                    console.error('Error creating work order:', error);
                });
        }
    };

    return (
        <div className='container'>
            <br />
            <div className='row justify-content-center'>
                <div className='col-md-6'>
                    <div className='card'>
                        <div className='card-body'>
                            <h2 className='text-center'>{orderId ? 'Update Work Order' : 'Add Work Order'}</h2>
                            <form onSubmit={saveOrUpdateWorkOrder}>
                                <div className='form-group mb-2'>
                                    <label className='form-label'>Asset ID:</label>
                                    <input
                                        type='text'
                                        placeholder='Enter Asset ID'
                                        className='form-control'
                                        value={assetId}
                                        onChange={(e) => setAssetId(e.target.value)}
                                    />
                                </div>
                                <div className='form-group mb-2'>
                                    <label className='form-label'>Technician ID:</label>
                                    <input
                                        type='text'
                                        placeholder='Enter Technician ID'
                                        className='form-control'
                                        value={technicianId}
                                        onChange={(e) => setTechnicianId(e.target.value)}
                                    />
                                </div>
                                <div className='form-group mb-2'>
                                    <label className='form-label'>Description:</label>
                                    <input
                                        type='text'
                                        placeholder='Enter Description'
                                        className='form-control'
                                        value={description}
                                        onChange={(e) => setDescription(e.target.value)}
                                    />
                                </div>
                                <div className='form-group mb-2'>
                                    <label className='form-label'>Status:</label>
                                    <input
                                        type='text'
                                        placeholder='Enter Status'
                                        className='form-control'
                                        value={status}
                                        onChange={(e) => setStatus(e.target.value)}
                                    />
                                </div>
                                <button className='btn btn-success' type='submit'>
                                    {orderId ? 'Update' : 'Submit'}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WorkOrdersComponents;
