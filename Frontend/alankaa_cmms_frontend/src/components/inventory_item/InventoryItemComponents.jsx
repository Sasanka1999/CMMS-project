// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { createInventoryItem, getInventoryItem, updateInventoryItem } from '../../services/InventoryItemService';

const InventoryItemComponents = () => {
    const [itemName, setItemName] = useState('');
    const [description, setDescription] = useState('');
    const [location, setLocation] = useState('');
    const [quantity, setQuantity] = useState(0);
    const [cost, setCost] = useState(0.0);

    const { itemId } = useParams();
    const navigate = useNavigate();

    const [errors, setErrors] = useState({
        itemName: '',
        description: '',
        location: '',
        quantity: '',
        cost: ''
    });

    useEffect(() => {
        if (itemId) {
            getInventoryItem(itemId)
                .then((response) => {
                    setItemName(response.data.itemName);
                    setDescription(response.data.description);
                    setLocation(response.data.location);
                    setQuantity(response.data.quantity);
                    setCost(response.data.cost);
                })
                .catch((error) => {
                    console.error(error);
                });
        }
    }, [itemId]);

    function saveOrUpdateItem(e) {
        e.preventDefault();

        if (validateForm()) {
            const item = { itemName, description, location, quantity, cost };

            if (itemId) {
                updateInventoryItem(itemId, item)
                    .then((response) => {
                        console.log(response.data);
                        navigate('/inventory-items');
                    })
                    .catch((error) => {
                        console.error(error);
                    });
            } else {
                createInventoryItem(item)
                    .then((response) => {
                        console.log(response.data);
                        navigate('/inventory-items');
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

        if (!itemName.trim()) {
            errorsCopy.itemName = 'Item name is required';
            valid = false;
        } else {
            errorsCopy.itemName = '';
        }

        if (!description.trim()) {
            errorsCopy.description = 'Description is required';
            valid = false;
        } else {
            errorsCopy.description = '';
        }

        if (!location.trim()) {
            errorsCopy.location = 'Location is required';
            valid = false;
        } else {
            errorsCopy.location = '';
        }

        if (!quantity) {
            errorsCopy.quantity = 'Quantity is required';
            valid = false;
        } else {
            errorsCopy.quantity = '';
        }

        if (!cost) {
            errorsCopy.cost = 'Cost is required';
            valid = false;
        } else {
            errorsCopy.cost = '';
        }

        setErrors(errorsCopy);
        return valid;
    }

    function pageTitle() {
        return itemId ? <h2 className="text-center">Update Inventory Item</h2> : <h2 className="text-center">Add Inventory Item</h2>;
    }

    return (
        <div className="container">
            <br /><br />
            <div className="row">
                <div className="card col-md-6 offset-md-3 offset-mid-3">
                    {pageTitle()}
                    <div className="card-body">
                        <form>
                            <div className="form-group mb-2">
                                <label className="form-label" htmlFor="itemName">
                                    Item Name:
                                </label>
                                <input
                                    type="text"
                                    placeholder="Enter Item Name"
                                    name="itemName"
                                    className={`form-control ${errors.itemName ? 'is-invalid' : ''}`}
                                    value={itemName}
                                    onChange={(e) => setItemName(e.target.value)}
                                />
                                {errors.itemName && <div className="invalid-feedback">{errors.itemName}</div>}
                            </div>

                            <div className="form-group mb-2">
                                <label className="form-label" htmlFor="description">
                                    Description:
                                </label>
                                <input
                                    type="text"
                                    placeholder="Enter Description"
                                    name="description"
                                    className={`form-control ${errors.description ? 'is-invalid' : ''}`}
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                />
                                {errors.description && <div className="invalid-feedback">{errors.description}</div>}
                            </div>

                            <div className="form-group mb-2">
                                <label className="form-label" htmlFor="location">
                                    Location:
                                </label>
                                <input
                                    type="text"
                                    placeholder="Enter Location"
                                    name="location"
                                    className={`form-control ${errors.location ? 'is-invalid' : ''}`}
                                    value={location}
                                    onChange={(e) => setLocation(e.target.value)}
                                />
                                {errors.location && <div className="invalid-feedback">{errors.location}</div>}
                            </div>

                            <div className="form-group mb-2">
                                <label className="form-label" htmlFor="quantity">
                                    Quantity:
                                </label>
                                <input
                                    type="number"
                                    placeholder="Enter Quantity"
                                    name="quantity"
                                    className={`form-control ${errors.quantity ? 'is-invalid' : ''}`}
                                    value={quantity}
                                    onChange={(e) => setQuantity(e.target.value)}
                                />
                                {errors.quantity && <div className="invalid-feedback">{errors.quantity}</div>}
                            </div>

                            <div className="form-group mb-2">
                                <label className="form-label" htmlFor="cost">
                                    Cost:
                                </label>
                                <input
                                    type="number"
                                    placeholder="Enter Cost"
                                    name="cost"
                                    className={`form-control ${errors.cost ? 'is-invalid' : ''}`}
                                    value={cost}
                                    onChange={(e) => setCost(e.target.value)}
                                />
                                {errors.cost && <div className="invalid-feedback">{errors.cost}</div>}
                            </div>

                            <button className="btn btn-success" onClick={saveOrUpdateItem}>
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InventoryItemComponents;
