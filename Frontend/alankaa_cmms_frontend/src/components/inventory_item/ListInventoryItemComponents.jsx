// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
// eslint-disable-next-line no-unused-vars
import { useNavigate } from "react-router-dom";
import { deleteInventoryItem, listInventoryItems } from "../../services/InventoryItemService";
// import { deleteInventoryItem, listInventoryItems } from "../../services/InventoryItemServices";
// eslint-disable-next-line no-unused-vars
import { Button } from "bootstrap";

const ListInventoryItemsComponents = () => {
    const [inventoryItems, setInventoryItems] = useState([]);
    // eslint-disable-next-line no-unused-vars
    const navigator = useNavigate();

    useEffect(() => {
        getAllInventoryItems();
    }, []);

    function getAllInventoryItems() {
        listInventoryItems()
            .then((response) => {
                setInventoryItems(response.data);
            })
            .catch((error) => {
                console.error(error)
            })
    }

    function addNewInventoryItem() {
        navigator('/add-inventory-item');
    }

    function updateInventoryItem(itemId) {
        navigator(`/edit-inventory-item/${itemId}`);
    }

    function removeInventoryItem(itemId) {
        console.log(itemId);
        // eslint-disable-next-line no-unused-vars
        deleteInventoryItem(itemId)
            // eslint-disable-next-line no-unused-vars
            .then((response) => {
                getAllInventoryItems();
            })
            .catch((error) => {
                console.error(error);
            });
    }

    return (
        <div className="container">
            <h2 className="text-center">List of Inventory Items</h2>
            <button className="btn btn-primary mb-2" onClick={addNewInventoryItem}>
                Add Inventory Item
            </button>
            <table className="table table-striped table-bordered">
                <thead>
                    <tr>
                        <th>Item ID</th>
                        <th>Item Name</th>
                        <th>Description</th>
                        <th>Location</th>
                        <th>Quantity</th>
                        <th>Cost</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {inventoryItems.map((item) => (
                        <tr key={item.itemId}>
                            <td>{item.itemId}</td>
                            <td>{item.itemName}</td>
                            <td>{item.description}</td>
                            <td>{item.location}</td>
                            <td>{item.quantity}</td>
                            <td>{item.cost}</td>
                            <td>
                                <button className="btn btn-info" onClick={() => updateInventoryItem(item.itemId)}>
                                    Update
                                </button>
                                <button
                                    className="btn btn-danger"
                                    onClick={() => removeInventoryItem(item.itemId)}
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

export default ListInventoryItemsComponents;
