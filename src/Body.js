import React, { useEffect, useState } from "react";
import RestaurantCard from "./Components/RestaurantCard";
import Modal from "./Components/Modal";

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [items, setItems] = useState([]);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  const searchApi = async () => {
    try {
      const data = await fetch(
        `http://localhost:8080/items/search?text=${searchText}`
      );
      const json = await data.json();
      setItems(json);
    } catch (err) {
      console.log(err);
    }
  };

  const itemsApi = async () => {
    try {
      const data = await fetch("http://localhost:8080/items/list");
      const json = await data.json();
      setItems(json);
    } catch (err) {
      console.log(err);
    }
  };

  const addData = async (data) => {
    try {
      const data2 = await fetch("http://localhost:8080/items/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: data.name,
          price: data.price,
          rating: data.rating,
        }),
      });
      const response = await data2.text();
      console.log(response);
      itemsApi();
    } catch (err) {
      console.log(err);
    }
  };
  

  useEffect(() => {
    if (searchText.length === 0) {
      itemsApi();
    }
  }, [searchText]);

  return (
    <div className="w-full min-h-screen p-5 bg-gray-100">
      <div className="flex flex-col md:flex-row justify-between items-center mb-5">
        <div className="flex w-full md:w-auto mb-3 md:mb-0">
          <input  type="text"  className="border border-gray-400 p-2 rounded-l w-full md:w-64 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Search items..."  value={searchText}   onChange={(e) => setSearchText(e.target.value)}   />
          <button   className="bg-blue-500 text-white px-4 py-2 rounded-r hover:bg-blue-600" onClick={searchApi}> Search </button>
        </div>
        <button  className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600" onClick={handleOpenModal}>  Add Item </button>
      </div>

      <div className="flex flex-wrap   gap-5">
        {items.length > 0 ? (
          items.map((item) => (
            <RestaurantCard
              key={item.id}
              name={item.name}
              price={item.price}
              rating={item.rating}
              id={item.id}
              onupdate={itemsApi}
            />
          ))
        ) : (
          <p className="text-gray-500">No items found.</p>
        )}
      </div>

      <Modal  isOpen={isModalOpen} onClose={handleCloseModal}   onSubmit={addData}  /> 
    </div>
  );
};

export default Body;
