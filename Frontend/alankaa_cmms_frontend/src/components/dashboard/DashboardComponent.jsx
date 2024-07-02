// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Link } from 'react-router-dom';

const DashboardComponent = () => {
  return (
    <div className="container" style={{ backgroundColor: '#f8f9fa', minHeight: '100vh', padding: '20px' }}>
      <h2 className="text-center mt-4">Alankaa CMMS Dashboard</h2>

      <div className="row mt-4">
        <div className="col-md-4">
          <div className="card border-primary mb-3">
            <div className="card-body text-primary">
              <h5 className="card-title">Assets</h5>
              <p className="card-text">Manage all your assets in one place.</p>
              <Link to="/assets" className="btn btn-primary" style={{ backgroundColor: '#007bff', borderColor: '#007bff' }}>
                View Assets
              </Link>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card border-success mb-3">
            <div className="card-body text-success">
              <h5 className="card-title">Work Orders</h5>
              <p className="card-text">Track and manage work orders.</p>
              <Link to="/work-orders" className="btn btn-success" style={{ backgroundColor: '#28a745', borderColor: '#28a745' }}>
                View Work Orders
              </Link>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card border-info mb-3">
            <div className="card-body text-info">
              <h5 className="card-title">Inventory Items</h5>
              <p className="card-text">Keep track of your inventory items.</p>
              <Link to="/inventory-items" className="btn btn-info" style={{ backgroundColor: '#17a2b8', borderColor: '#17a2b8' }}>
                View Inventory Items
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="row mt-4">
        <div className="col-md-4">
          <div className="card border-warning mb-3">
            <div className="card-body text-warning">
              <h5 className="card-title">Technicians</h5>
              <p className="card-text">Manage your technicians and their skills.</p>
              <Link to="/technicians" className="btn btn-warning" style={{ backgroundColor: '#ffc107', borderColor: '#ffc107' }}>
                View Technicians
              </Link>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card border-danger mb-3">
            <div className="card-body text-danger">
              <h5 className="card-title">Preventive Schedules</h5>
              <p className="card-text">Plan and monitor preventive maintenance schedules.</p>
              <Link to="/preventive-schedules" className="btn btn-danger" style={{ backgroundColor: '#dc3545', borderColor: '#dc3545' }}>
                View Preventive Schedules
              </Link>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card border-secondary mb-3">
            <div className="card-body text-secondary">
              <h5 className="card-title">Maintenance History</h5>
              <p className="card-text">Review past maintenance activities.</p>
              <Link to="/maintenance-history" className="btn btn-secondary" style={{ backgroundColor: '#6c757d', borderColor: '#6c757d' }}>
                View Maintenance History
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="row mt-4">
        <div className="col-md-4">
          <div className="card border-dark mb-3">
            <div className="card-body text-dark">
              <h5 className="card-title">Utilized Parts</h5>
              <p className="card-text">Track parts used in maintenance.</p>
              <Link to="/utilized-parts" className="btn btn-dark" style={{ backgroundColor: '#343a40', borderColor: '#343a40' }}>
                View Utilized Parts
              </Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default DashboardComponent;
