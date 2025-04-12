// src/pages/OrdersPage.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const OrdersPage = () => {
  const [orders, setOrders] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Retrieve orders from localStorage
    const storedOrders = JSON.parse(localStorage.getItem('orders')) || [];
    setOrders(storedOrders);
  }, []);

  const handleCancelOrder = (index) => {
    const updatedOrders = [...orders];
    updatedOrders.splice(index, 1); // Remove the order from the array
    localStorage.setItem('orders', JSON.stringify(updatedOrders)); // Save the updated array to localStorage
    setOrders(updatedOrders); // Update the state to re-render the page
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-indigo-700 mb-6 text-center">Your Orders</h1>

      {orders.length === 0 ? (
        <p className="text-lg text-gray-600">You have no orders yet.</p>
      ) : (
        <div className="space-y-6">
          {orders.map((order, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-md">
                <img src={order.item.image} alt="order.item.name" />
              <h2 className="text-xl font-semibold text-indigo-600">{order.item.name}</h2>
              <p className="text-gray-600">User: {order.userName}</p>
              <p className="text-gray-600">Address: {order.address}</p>
              <p className="text-gray-600">Phone: {order.phone}</p>
              <p className="text-gray-600">Payment Method: {order.paymentMethod}</p>

              <button
                onClick={() => handleCancelOrder(index)}
                className="mt-4 bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
              >
                Cancel Order
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default OrdersPage;
