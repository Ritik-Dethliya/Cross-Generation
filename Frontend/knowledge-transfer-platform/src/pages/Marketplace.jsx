import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for routing

const MarketPlace = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate(); // Hook for navigating to the order form page

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get('https://data2-e4619-default-rtdb.firebaseio.com/MarketPlace.json');
        const data = res.data || [];
        setProducts(Object.values(data));
      } catch (err) {
        console.error('Failed to fetch products:', err);
      }
    };

    fetchProducts();
  }, []);

  const handleBuy = (item) => {
    // Navigate to the order page with item details as state
    navigate('/order', { state: { item } });
  };

  return (
    <div className="bg-gradient-to-b from-indigo-50 to-white min-h-screen p-6">
      <h1 className="text-3xl font-bold text-indigo-700 mb-6 text-center">Marketplace</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((item, index) => (
          <div key={index} className="bg-white p-4 rounded-xl shadow hover:shadow-lg transition-all">
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-48 object-cover rounded-t-xl mb-4"
            />
            <h2 className="text-xl font-semibold text-indigo-800 mb-2">{item.name}</h2>
            <p className="text-gray-600 mb-1">{item.description}</p>
            <p className="text-sm text-gray-500 mb-2">Rating: ⭐ {item.rating}</p>
            <p className="text-lg font-bold text-indigo-600">{item.price}</p>
            <button
              onClick={() => handleBuy(item)} // Call handleBuy when Buy Now is clicked
              className="mt-4 bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded w-full"
            >
              Buy Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MarketPlace;
