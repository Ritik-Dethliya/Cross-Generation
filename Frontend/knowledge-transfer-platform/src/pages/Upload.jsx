import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Upload = () => {
  const [itemName, setItemName] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');
  const [uploads, setUploads] = useState([]);
  const [showForm, setShowForm] = useState(false);

  const currentUser = JSON.parse(localStorage.getItem('currentUser'));

  const handleUpload = async () => {
    if (!itemName || !description || !image) {
      return alert('Please fill in all fields');
    }

    const newItem = {
      itemName,
      description,
      image,
      uploadedBy: currentUser?.name || 'Anonymous',
    };

    try {
      await axios.post(
        'https://data2-e4619-default-rtdb.firebaseio.com/uploads.json',
        newItem
      );
      setItemName('');
      setDescription('');
      setImage('');
      setShowForm(false);
      fetchUploads();
    } catch (error) {
      console.error('Upload failed', error);
      alert('Failed to upload item');
    }
  };

  const fetchUploads = async () => {
    try {
      const { data } = await axios.get(
        'https://data2-e4619-default-rtdb.firebaseio.com/uploads.json'
      );
      if (data) {
        const items = Object.values(data);
        setUploads(items.reverse());
      }
    } catch (error) {
      console.error('Failed to fetch uploads', error);
    }
  };

  useEffect(() => {
    fetchUploads();
  }, []);

  return (
    <div className="min-h-screen bg-purple-50 p-6">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-4 text-indigo-700 text-center">Your Uploaded Items</h2>

        <div className="text-center mb-6">
          <button
            onClick={() => setShowForm(!showForm)}
            className="bg-indigo-600 text-white px-6 py-2 rounded hover:bg-indigo-700 transition"
          >
            {showForm ? 'Cancel Upload' : 'Upload New Item'}
          </button>
        </div>

        {showForm && (
          <div className="bg-white p-6 rounded-lg shadow mb-8">
            <input
              type="text"
              placeholder="Item Name"
              value={itemName}
              onChange={(e) => setItemName(e.target.value)}
              className="w-full border p-2 mb-4 rounded"
            />
            <textarea
              placeholder="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full border p-2 mb-4 rounded"
              rows={3}
            />
            <input
              type="text"
              placeholder="Image URL"
              value={image}
              onChange={(e) => setImage(e.target.value)}
              className="w-full border p-2 mb-4 rounded"
            />
            <button
              onClick={handleUpload}
              className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 w-full"
            >
              Submit Upload
            </button>
          </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {uploads.map((item, index) => (
            <div key={index} className="bg-white rounded-lg shadow p-4">
              <img
                src={item.image}
                alt={item.itemName}
                className="w-full h-48 object-cover rounded mb-3"
              />
              <h4 className="text-lg font-bold text-indigo-700">{item.itemName}</h4>
              <p className="text-sm text-gray-700 mb-2">{item.description}</p>
              <p className="text-xs text-gray-500 italic">
                Uploaded by: <span className="font-semibold">{item.uploadedBy}</span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Upload;
