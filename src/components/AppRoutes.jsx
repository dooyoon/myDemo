import { Routes, Route } from 'react-router-dom';

import Inventory from '../pages/Inventory';
import Orders from '../pages/Orders';
import Customers from '../pages/Customers';
import Dashboard from '../pages/Dashboard';

export default function AppRoutes() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/inventory" element={<Inventory />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/customers" element={<Customers />} />
      </Routes>
    </div>
  );
}
