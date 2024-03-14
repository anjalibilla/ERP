import React from "react";

function OrderModal({ isOpen, onClose, onSubmit, order }) {
  if (!isOpen) return null;

  // Prevent the modal from closing when clicking inside the modal content
  const handleModalContentClick = (e) => e.stopPropagation();

  return (
    <div
      className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full"
      onClick={onClose}
    >
      <div
        className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white"
        onClick={handleModalContentClick}
      >
        <h2 className="text-xl font-semibold">
          {order ? "Edit Order" : "Add Order"}
        </h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            // Form field values extraction
            const formData = new FormData(e.target);
            const updatedOrder = {
              id: order ? order.id : Date.now(),
              customerName: formData.get("customerName"),
              orderDate: formData.get("orderDate"),
              status: formData.get("status"),
            };
            onSubmit(updatedOrder);
          }}
          className="space-y-4"
        >
          <label className="block">
            <span className="text-gray-700">Customer Name:</span>
            <input
              type="text"
              name="customerName"
              defaultValue={order?.customerName || ""}
              className="form-input mt-1 block w-full"
              placeholder="John Doe"
              required
            />
          </label>
          <label className="block">
            <span className="text-gray-700">Order Date:</span>
            <input
              type="date"
              name="orderDate"
              defaultValue={order?.orderDate || ""}
              className="form-input mt-1 block w-full"
              required
            />
          </label>
          <label className="block">
            <span className="text-gray-700">Status:</span>
            <select
              name="status"
              defaultValue={order?.status || ""}
              className="form-select mt-1 block w-full"
              required
            >
              <option value="Processing">Processing</option>
              <option value="Shipped">Shipped</option>
              <option value="Delivered">Delivered</option>
            </select>
          </label>
          <div className="flex justify-end space-x-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-700"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default OrderModal;
