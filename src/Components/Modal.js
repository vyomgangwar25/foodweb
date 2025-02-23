import React from "react";
import { useState } from "react";

const Modal = ({ isOpen, onClose, onSubmit }) => {
 

  const [formData, setFormData] = useState({
    name: "",
    rating: "",
    price: "",
  });
  if (!isOpen) return null;  
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);  
    setFormData({ name: "", rating: "", price: "" });  
    onClose(); // Close modal
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg p-6 w-1/3">
        <h2 className="text-xl font-bold mb-4">Add Item</h2>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Enter Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border rounded p-2"
            required
          />

          <input
            type="number"
            name="rating"
            placeholder="Enter Rating (1-5)"
            value={formData.rating}
            onChange={handleChange}
            className="w-full border rounded p-2"
            min="1"
            max="5"
            required
          />

          <input
            type="number"
            name="price"
            placeholder="Enter Price"
            value={formData.price}
            onChange={handleChange}
            className="w-full border rounded p-2"
            required
          />

          <div className="flex justify-between">
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
              Submit
            </button>
            <button type="button" onClick={onClose} className="bg-red-500 text-white px-4 py-2 rounded">
              Close
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;
