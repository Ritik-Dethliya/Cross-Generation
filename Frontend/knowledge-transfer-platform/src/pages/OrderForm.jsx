// src/pages/OrderForm.jsx
import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const OrderForm = () => {
  const navigate = useNavigate();
  const { state } = useLocation(); // Get the item passed from MarketPlace
  const item = state?.item || {};
  
  const [userName, setUserName] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();

    // Save order in localStorage (or Firebase)
    const order = {
      item,
      userName,
      address,
      phone,
      paymentMethod,
      status: 'Ordered',
    };

    let orders = JSON.parse(localStorage.getItem('orders')) || [];
    orders.push(order);
    localStorage.setItem('orders', JSON.stringify(orders));

    alert("Order placed successfully!");
    navigate('/orders'); // Navigate to the orders page after successful order
  };

  return (
    <div className="max-w-md mx-auto p-6 mt-10 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-indigo-600">Order Details</h2>
      <p className="text-lg font-medium mb-2">Item: {item.name}</p>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          placeholder="Your Name"
          required
          className="w-full px-4 py-2 border rounded-md"
        />
        <input
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          placeholder="Address"
          required
          className="w-full px-4 py-2 border rounded-md"
        />
        <input
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="Phone Number"
          required
          className="w-full px-4 py-2 border rounded-md"
        />
        <select
          value={paymentMethod}
          onChange={(e) => setPaymentMethod(e.target.value)}
          required
          className="w-full px-4 py-2 border rounded-md"
        >
          <option value="">Payment Method</option>
          <option value="UPI">UPI</option>
          <option value="COD">Cash on Delivery</option>
          <option value="Card">Credit/Debit Card</option>
        </select>
        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-2 px-4 rounded hover:bg-indigo-700"
        >
          Place Order
        </button>
      </form>
    </div>
  );
};

export default OrderForm;
