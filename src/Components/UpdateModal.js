import React, { useState } from 'react';

const UpdateModal = (props) => {
    const[id]=useState(props.id)
    const[name,setName]=useState(props.name);
    const[price,setPrice]=useState(props.price)
    const submit=()=>{
        props.onSubmit({name,price,id})
    }

  if (!props.isOpen) return null;  

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg w-96 p-5 shadow-lg">
        <h2 className="text-xl font-bold mb-4">Update Details</h2>

        {/* Form */}
        <div form="">
          <div className="mb-3">
            <label className="block font-semibold">Name</label>
            <input
              type="text"
              value={name}
              onChange={(e)=>setName(e.target.value)}
              className="border border-gray-300 p-2 w-full rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-3">
            <label className="block font-semibold">Price</label>
            <input
              type="text"
              value={price}
              onChange={(e)=>setPrice(e.target.value)}
              className="border border-gray-300 p-2 w-full rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-between ">
          <button
            onClick={props.isClose}
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
          >
            Close
          </button>
          <button
          onClick={submit}
           className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default UpdateModal;
