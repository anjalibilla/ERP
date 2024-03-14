import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css"; // Default styling
import OrdersModal from "./OrdersModal"; // Assuming OrdersModal is in the same directory

function CalendarView() {
  const orders = [
    {
      id: 1,
      customerName: "John Doe",
      orderDate: "2024-03-10",
      status: "Shipped",
    },
    {
      id: 2,
      customerName: "Jane Smith",
      orderDate: "2024-03-15",
      status: "Processing",
    },
    // Add more orders as needed
  ];
  const [value, onChange] = useState(new Date());
  const [selectedOrders, setSelectedOrders] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const findOrdersForDate = (date) => {
    const formattedDate = date.toISOString().split("T")[0];
    return orders.filter((order) => order.orderDate === formattedDate);
  };

  const handleDateChange = (value) => {
    onChange(value);
    const ordersForDate = findOrdersForDate(value);
    setSelectedOrders(ordersForDate);
    if (ordersForDate.length > 0) {
      setIsModalOpen(true);
    }
  };

  const tileClassName = ({ date, view }) => {
    if (view === "month") {
      const ordersForDate = findOrdersForDate(date);
      if (ordersForDate.length > 0) {
        return "bg-blue-200"; // Apply a background class
      }
    }
  };

  return (
    <div className="p-8">
      <Calendar
        onChange={handleDateChange}
        value={value}
        tileClassName={tileClassName} // Add this line to style dates with orders
      />
      <OrdersModal
        isOpen={isModalOpen}
        orders={selectedOrders}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}
export default CalendarView;
