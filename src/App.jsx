import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import ProductList from "./components/ProductList";
import OrderList from "./components/OrderList";
import CalendarView from "./components/CalendarView";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="container mx-auto">
      <nav className="bg-blue-500 text-white shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between">
          <div className="flex space-x-7">
            <div>
              {/* Website Logo */}
              <a href="#" className="flex items-center py-4 px-2">
                <span className="font-semibold text-lg">ERP System</span>
              </a>
            </div>
            {/* Primary Navbar items */}
            <div className="hidden md:flex items-center space-x-1">
              <Link to="/" className="py-4 px-2 hover:bg-blue-700 rounded">Dashboard</Link>
              <Link to="/products" className="py-4 px-2 hover:bg-blue-700 rounded">Products Management</Link>
              <Link to="/orders" className="py-4 px-2 hover:bg-blue-700 rounded">Orders Management</Link>
              <Link to="/calendar" className="py-4 px-2 hover:bg-blue-700 rounded">Calendar view</Link>
              {/* Add additional navigation links as needed */}
            </div>
          </div>
          {/* Secondary Navbar items, such as profile or logout, could go here */}
        </div>
      </div>
    </nav>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/orders" element={<OrderList />} />
          <Route path="/calendar" element={<CalendarView />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
