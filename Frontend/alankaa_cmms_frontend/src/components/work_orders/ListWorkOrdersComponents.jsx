// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { deleteWorkOrder, listWorkOrders } from '../../services/WorkOrderService';
import { NotificationContext } from '../../contexts/NotificationContext';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

const ListWorkOrdersComponents = () => {
    const [workOrders, setWorkOrders] = useState([]);
    const [selectedOrders, setSelectedOrders] = useState([]);
    // eslint-disable-next-line no-unused-vars
    const { addNotification } = useContext(NotificationContext);
    const navigate = useNavigate();

    useEffect(() => {
        getAllWorkOrders();
    }, []);

    function getAllWorkOrders() {
        listWorkOrders()
            .then((response) => {
                setWorkOrders(response.data);
            })
            .catch((error) => {
                console.error('Error fetching work orders:', error);
                // Display error message to the user
            });
    }

    function addNewWorkOrder() {
        navigate('/add-work-order');
    }

    function updateWorkOrder(orderId) {
        navigate(`/edit-work-order/${orderId}`);
    }

    function removeWorkOrder(orderId) {
        deleteWorkOrder(orderId)
            .then(() => {
                getAllWorkOrders(); // Refresh work orders after deletion
            })
            .catch((error) => {
                console.error('Error deleting work order:', error);
                // Display error message to the user
            });
    }

    function handleCheckboxChange(orderId) {
        const index = selectedOrders.indexOf(orderId);
        if (index === -1) {
            setSelectedOrders([...selectedOrders, orderId]);
        } else {
            setSelectedOrders(selectedOrders.filter((id) => id !== orderId));
        }
    }

    function generatePDF() {
        const input = document.getElementById('pdf-table');
        html2canvas(input)
            .then((canvas) => {
                const imgData = canvas.toDataURL('image/png');
                const pdf = new jsPDF();
                pdf.addImage(imgData, 'PNG', 10, 10, 190, 0);
                pdf.save('work-orders.pdf');
            })
            .catch((error) => {
                console.error('Error generating PDF:', error);
            });
    }

    return (
        <div className="container">
            <h2 className="text-center">List of Work Orders</h2>
            <button className="btn btn-primary mb-2" onClick={addNewWorkOrder}>
                Add Work Order
            </button>
            <button className="btn btn-secondary mb-2 ms-2" onClick={generatePDF}>
                Generate PDF
            </button>
            <table id="work-orders-table" className="table table-striped table-bordered">
                <thead>
                    <tr>
                        <th>Order ID</th>
                        <th>Technician ID</th>
                        <th>Asset ID</th>
                        <th>Description</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {workOrders.map((order) => (
                        <tr key={order.orderId}>
                            <td>{order.orderId}</td>
                            <td>{order.technicianId}</td>
                            <td>{order.assetId}</td>
                            <td>{order.description}</td>
                            <td>{order.status}</td>
                            <td>
                                <div className="d-flex align-items-center">
                                    <button
                                        className="btn btn-info me-2"
                                        onClick={() => updateWorkOrder(order.orderId)}
                                    >
                                        Update
                                    </button>
                                    <button
                                        className="btn btn-danger me-2"
                                        onClick={() => removeWorkOrder(order.orderId)}
                                    >
                                        Delete
                                    </button>
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            checked={selectedOrders.includes(order.orderId)}
                                            onChange={() => handleCheckboxChange(order.orderId)}
                                        />
                                    </div>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {/* Hidden table for PDF generation */}
            <table id="pdf-table" className="d-none">
                <thead>
                    <tr>
                        <th>Order ID</th>
                        <th>Technician ID</th>
                        <th>Asset ID</th>
                        <th>Description</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {workOrders.map((order) => (
                        <tr key={order.orderId}>
                            <td>{order.orderId}</td>
                            <td>{order.technicianId}</td>
                            <td>{order.assetId}</td>
                            <td>{order.description}</td>
                            <td>{order.status}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ListWorkOrdersComponents;
