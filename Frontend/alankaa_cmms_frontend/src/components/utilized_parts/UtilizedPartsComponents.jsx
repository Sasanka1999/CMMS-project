// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { createUtilizedPart, getUtilizedPartById, updateUtilizedPart } from '../../services/UtilizedPartsService';

const UtilizedPartsComponents = () => {
    const [orderId, setOrderId] = useState('');
    const [itemId, setItemId] = useState('');
    const [quantity, setQuantity] = useState('');

    const { id } = useParams(); // Assuming the route will pass both orderId and itemId as params
    const navigator = useNavigate();

    useEffect(() => {
        if (id) {
            const [orderId, itemId] = id.split('-');
            getUtilizedPartById(orderId, itemId)
                .then((response) => {
                    setOrderId(response.data.orderId);
                    setItemId(response.data.itemId);
                    setQuantity(response.data.quantity);
                })
                .catch((error) => {
                    console.error('Error fetching utilized part:', error);
                    // Display error message to the user
                });
        }
    }, [id]);

    function saveOrUpdateUtilizedPart(e) {
        e.preventDefault();

        const utilizedPart = { orderId, itemId, quantity };

        if (id) {
            const [orderId, itemId] = id.split('-');
            updateUtilizedPart(orderId, itemId, utilizedPart)
                .then(() => {
                    navigator('/utilized-parts');
                })
                .catch((error) => {
                    console.error('Error updating utilized part:', error);
                    // Display error message to the user
                });
        } else {
            createUtilizedPart(utilizedPart)
                .then(() => {
                    navigator('/utilized-parts');
                })
                .catch((error) => {
                    console.error('Error creating utilized part:', error);
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
                            <h2 className="text-center">{id ? 'Update Utilized Part' : 'Add Utilized Part'}</h2>
                            <form>
                                <div className="form-group">
                                    <label>Order ID:</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Enter Order ID"
                                        value={orderId}
                                        onChange={(e) => setOrderId(e.target.value)}
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Item ID:</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Enter Item ID"
                                        value={itemId}
                                        onChange={(e) => setItemId(e.target.value)}
                                    />
                                </div>
                
                                <br />
                                <button className="btn btn-success" onClick={saveOrUpdateUtilizedPart}>
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

export default UtilizedPartsComponents;
