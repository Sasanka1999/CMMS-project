// eslint-disable-next-line no-unused-vars
import React from 'react';
import './App.css';
import AssetsComponents from './components/asset/AssetsComponents';
import FooterComponents from './components/FooterComponents';
import HeaderComponents from './components/HeaderComponents';
import ListAssetsComponents from './components/asset/ListAssetsComponents';
import ListInventoryItemsComponents from './components/inventory_item/ListInventoryItemComponents';
import InventoryItemComponents from './components/inventory_item/InventoryItemComponents';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MaintenanceHistoryComponents from './components/MaintenanceHistory/MaintenanceHistoryComponents';
import ListMaintenanceHistoryComponents from './components/MaintenanceHistory/ListMaintenanceHistoryComponents';
import AlankaComponents from './components/AlankaComponents';
import ListUserComponents from './components/user/ListUserComponents';
import UserComponents from './components/user/UserComponents';
import AdminLoginComponents from './components/login/AdminLoginComponents';
import UserLogin from './components/login/UserLoginComponents';
import ListTechniciansComponents from './components/technicians/ListTechniciansComponents';
import TechniciansComponents from './components/technicians/TechniciansComponents';
import ListSkillsComponents from './components/skills/ListSkillsComponents';
import SkillsComponents from './components/skills/SkillsComponents';
import ListWorkOrdersComponents from './components/work_orders/ListWorkOrdersComponents';
import WorkOrdersComponents from './components/work_orders/WorkOrdersComponents';
import ListPreventiveScheduleComponents from './components/preventive_schedules/ListPreventiveScheduleComponents';
import PreventiveScheduleComponents from './components/preventive_schedules/PreventiveScheduleComponents';
import ListUtilizedPartsComponents from './components/utilized_parts/ListUtilizedPartsComponents';
import UtilizedPartsComponents from './components/utilized_parts/UtilizedPartsComponents';
import DashboardComponent from './components/dashboard/DashboardComponent';
import AdminDashboardComponent from './components/dashboard/AdminDashboardComponent';
import { NotificationProvider } from './contexts/NotificationContext';
import ListTechnicianSkillsComponents from './components/technician_skills/ListTechnicianSkillsComponents';
import TechnicianSkillsComponents from './components/technician_skills/TechnicianSkillsComponents';



function App() {
  return (
    <NotificationProvider>
      <BrowserRouter>
        <HeaderComponents />
        <Routes>
          {/* Route for the homepage */}
          <Route path='/' element={<AlankaComponents />} />

          <Route path='/admin-login' element={<AdminLoginComponents></AdminLoginComponents>} />
          <Route path='/user-login' element={<UserLogin></UserLogin>}/>


          <Route path='/dashboard' element={<DashboardComponent />} />
          <Route path='/admin-dashboard' element={<AdminDashboardComponent />} /> {/* Add route for AdminDashboard */}

          {/* Route for displaying assets */}
          <Route path='/assets' element={<ListAssetsComponents />} />

          {/* Route for adding a new asset */}
          {/* http://localhost:3000/add-asset */}
          <Route path='/add-asset' element={<AssetsComponents />} />

          {/* Route for editing a specific asset */}
          {/* http://localhost:3000/edit-asset/assetid */}
          <Route path='/edit-asset/:assetId' element={<AssetsComponents />} />

          {/* Route for displaying inventory items */}
          {/* http://localhost:3000/inventory-items */}
          <Route path='/inventory-items' element={<ListInventoryItemsComponents />} />

          {/* Route for adding a new inventory item */}
          {/* http://localhost:3000/add-inventory-item */}
          <Route path='/add-inventory-item' element={<InventoryItemComponents />} />

          {/* Route for editing a specific inventory item */}
          {/* http://localhost:3000/edit-inventory-item/itemid */}
          <Route path='/edit-inventory-item/:itemId' element={<InventoryItemComponents />} />

          {/* Route for displaying maintenance history */}
          {/* http://localhost:3000/maintenance-history */}
          <Route path='/maintenance-history' element={<ListMaintenanceHistoryComponents></ListMaintenanceHistoryComponents>} />

          {/* Route for adding a new maintenance history */}
          {/* http://localhost:3000/add-maintenance-history */}
          <Route path='/add-maintenance-history' element={<MaintenanceHistoryComponents></MaintenanceHistoryComponents>} />

          {/* Route for editing a specific maintenance history */}
          {/* http://localhost:3000/edit-maintenance-history/historyId */}
          <Route path='/edit-maintenance-history/:historyId' element={<MaintenanceHistoryComponents />} />

          {/* Route for displaying users */}
          <Route path='/users' element={<ListUserComponents />} />

          {/* Route for adding a new user */}
          {/* http://localhost:3000/add-user */}
          <Route path='/add-user' element={<UserComponents />} />

          {/* Route for editing a specific user */}
          {/* http://localhost:3000/edit-user/userid */}
          <Route path='/edit-user/:userId' element={<UserComponents />} />

          {/* Route for displaying technicians */}
          <Route path="/technicians" element={<ListTechniciansComponents />} />

          {/* Route for adding a new technician
          http://localhost:3000/add-technician */}
          <Route path="/add-technician" element={<TechniciansComponents />} />

          {/* Route for editing a specific technician
          http://localhost:3000/edit-technician/technicianid */}
          <Route path="/edit-technician/:technicianId" element={<TechniciansComponents />} />
          
          {/* Route for displaying skills */}
          <Route path='/skills' element={<ListSkillsComponents />} />

          {/* Route for adding a new skill */}
          {/* http://localhost:3000/add-skill */}
          <Route path='/add-skill' element={<SkillsComponents />} />

          {/* Route for editing a specific skill */}
          {/* http://localhost:3000/edit-skill/skillid */}
          <Route path='/edit-skill/:skillId' element={<SkillsComponents />} />

          {/* Route for displaying work orders */}
          <Route path='/work-orders' element={<ListWorkOrdersComponents />} />

          {/* Route for adding a new work order */}
          {/* http://localhost:3000/add-work-order */}
          <Route path='/add-work-order' element={<WorkOrdersComponents />} />

          {/* Route for editing a specific work order */}
          {/* http://localhost:3000/edit-work-order/orderid */}
          <Route path='/edit-work-order/:orderId' element={<WorkOrdersComponents />} />

          {/* Route for displaying preventive schedules */}
          <Route path='/preventive-schedules' element={<ListPreventiveScheduleComponents />} />

          {/* Route for adding a new preventive schedule */}
          {/* http://localhost:3000/add-preventive-schedule */}
          <Route path='/add-schedule' element={<PreventiveScheduleComponents />} />

          {/* Route for editing a specific preventive schedule */}
          {/* http://localhost:3000/edit-preventive-schedule/scheduleid */}
          <Route path='/edit-schedule/:scheduleId' element={<PreventiveScheduleComponents />} />

          {/* Route for displaying utilized parts */}
          <Route path='/utilized-parts' element={<ListUtilizedPartsComponents />} />

          {/* Route for adding a new utilized part */}
          {/* http://localhost:3000/add-utilized-part */}
          <Route path='/add-utilized-part' element={<UtilizedPartsComponents />} />

          {/* Route for editing a specific utilized part */}
          {/* http://localhost:3000/edit-utilized-part/:orderIdParam-:itemIdParam */}
          <Route path='/edit-utilized-part/:orderIdParam-:itemIdParam' element={<UtilizedPartsComponents />} />

          {/* Route for displaying technician skills */}
          <Route path='/technician-skills' element={<ListTechnicianSkillsComponents />} />

          {/* Route for adding a new technician skill */}
          {/* http://localhost:3000/add-technician-skill */}
          <Route path='/add-technician-skill' element={<TechnicianSkillsComponents />} />

          {/* Route for editing a specific technician skill */}
          {/* http://localhost:3000/edit-technician-skill/:technicianIdParam-:skillIdParam */}
          <Route path='/edit-technician-skill/:technicianIdParam-:skillIdParam' element={<TechnicianSkillsComponents />} />


        </Routes>
        <FooterComponents />
      </BrowserRouter>
    </NotificationProvider>
  );
}

export default App;

