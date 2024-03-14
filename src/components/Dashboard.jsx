import React from 'react';

function Dashboard() {
    // Mock data for demonstration
    const mockData = {
        totalProducts: 150,
        totalOrders: 85,
    };

    return (
        <div className="p-8">
            <h1 className="text-2xl font-bold text-gray-800 mb-4">Dashboard</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {/* Total Products Card */}
                <div className="bg-white rounded-lg shadow p-5">
                    <h2 className="text-lg font-semibold text-gray-700">Total Products</h2>
                    <p className="text-3xl font-bold text-blue-500">{mockData.totalProducts}</p>
                </div>

                {/* Total Orders Card */}
                <div className="bg-white rounded-lg shadow p-5">
                    <h2 className="text-lg font-semibold text-gray-700">Total Orders</h2>
                    <p className="text-3xl font-bold text-green-500">{mockData.totalOrders}</p>
                </div>

                {/* Additional metrics or summaries can be added here */}
            </div>
        </div>
    );
}

export default Dashboard;
