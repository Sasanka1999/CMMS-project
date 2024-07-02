// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { deleteUtilizedPart, listUtilizedParts } from "../../services/UtilizedPartsService";

const ListUtilizedPartsComponents = () => {
    const [utilizedParts, setUtilizedParts] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        getAllUtilizedParts();
    }, []);

    function getAllUtilizedParts() {
        listUtilizedParts()
            .then((response) => {
                setUtilizedParts(response.data);
            })
            .catch((error) => {
                console.error(error);
            });
    }

    function addUtilizedPart() {
        navigate("/add-utilized-part");
    }

    function removeUtilizedPart(orderId, itemId) {
        deleteUtilizedPart(orderId, itemId)
            .then(() => {
                getAllUtilizedParts(); // Refresh the utilized parts list after deletion
            })
            .catch((error) => {
                console.error(error);
            });
    }

    return (
        <div className="container">
            <h2 className="text-center">List of Utilized Parts</h2>
            <button className="btn btn-primary mb-2" onClick={addUtilizedPart}>
                Add Utilized Part
            </button>
            <table className="table table-striped table-bordered">
                <thead>
                    <tr>
                        <th>Order ID</th>
                        <th>Item ID</th>
                        {/* <th>Quantity</th> */}
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {utilizedParts.map((part) => (
                        <tr key={`${part.orderId}-${part.itemId}`}>
                            <td>{part.orderId}</td>
                            <td>{part.itemId}</td>
                            <td>
                                <button
                                    className="btn btn-danger"
                                    onClick={() => removeUtilizedPart(part.orderId, part.itemId)}
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

export default ListUtilizedPartsComponents;
