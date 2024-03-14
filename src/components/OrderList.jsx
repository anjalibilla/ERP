import React, { useState } from 'react';
import OrderModal from './OrderModal'; // Assume this is similar to the ProductModal

function OrderList() {
  const initialOrders = [
    { id: 1, customerName: 'John Doe', orderDate: '2023-03-10', status: 'Shipped' },
    { id: 2, customerName: 'Jane Smith', orderDate: '2023-03-12', status: 'Processing' },
    { id: 3, customerName: 'William Johnson', orderDate: '2023-03-15', status: 'Delivered' },
  ];
  
  const [orders, setOrders] = useState(initialOrders);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentOrder, setCurrentOrder] = useState(null);

  const handleAddOrder = () => {
    setCurrentOrder(null);
    setIsModalOpen(true);
  };

  const handleEditOrder = (order) => {
    setCurrentOrder(order);
    setIsModalOpen(true);
  };

  const handleSubmit = (e, order) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const updatedOrder = {
      id: order ? order.id : Date.now(), // Simplified unique identifier
      customerName: formData.get('customerName'),
      orderDate: formData.get('orderDate'),
      status: formData.get('status'),
    };

    if (order) {
      // Edit mode
      setOrders(orders.map(o => o.id === order.id ? updatedOrder : o));
    } else {
      // Add mode
      setOrders([...orders, updatedOrder]);
    }

    setIsModalOpen(false);
  };

  return (
    <div className="p-8">
    <h1 className="text-2xl font-bold text-gray-800 mb-4">Order Management</h1>
    <button
      onClick={handleAddOrder}
      className="mb-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    >
      Add Order
    </button>

    {/* Order list display */}
    <div className="overflow-x-auto">
      <table className="min-w-full leading-normal">
        <thead>
          <tr>
            <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
              Customer Name
            </th>
            <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
              Order Date
            </th>
            <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
              Status
            </th>
            <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {orders.map(order => (
            <tr key={order.id}>
              <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                {order.customerName}
              </td>
              <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                {order.orderDate}
              </td>
              <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                {order.status}
              </td>
              <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <button
                  onClick={() => handleEditOrder(order)}
                  className="text-indigo-600 hover:text-indigo-900"
                >
                  Edit
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

    {/* OrderModal component */}
    <OrderModal
      isOpen={isModalOpen}
      onClose={() => setIsModalOpen(false)}
      onSubmit={handleSubmit}
      order={currentOrder}
    />
  </div>
  );
}
export default OrderList;
