import React, { useState } from "react";
import UpdateModal from "./UpdateModal";
import DeleteModal from "./DeleteModal";

const RestaurantCard = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const isClose = () => {
    setIsOpen(false);
  };
  const update = () => {
    setIsOpen(true);
  };

  const[deleteOpen,setDeleteOpen]=useState(false);
  const updateDeleteModal=()=>{
     setDeleteOpen(true)
  }
  const isDeleteClose=()=>{
    setDeleteOpen(false)
  }
  const handleSubmit = async (data) => {
    try {
      const data2 = await fetch(`http://localhost:8080/items/update/${data.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: data.name,
          price: data.price,
        }),
      })
      const response = await data2.text();
      isClose()
      props.onupdate();
      console.log(response);
    }
    catch (err) {
      console.log(err)
    }
  };

  const handleDelete=(id)=>{
    console.log("delete api called", id)
  }

  return (
    <div className="w-48 h-64   bg-gray-300 hover:bg-gray-400 cursor-pointer rounded  ">
      <div className="w-40 mt-2 h-32   ml-4 flex items-center justify-center">
        <img
          src="https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&webp=true&resize=375,341"
          className="w-40 h-32 rounded"
          alt=""
        />
      </div>
      <h1> name is {props.name}</h1>
      <h1>price is {props.price}</h1>
      <h1>rating is {props.rating}</h1>

      <button className="bg-green-500 rounded p-1 mx-2 mt-1" onClick={update}> Update</button>
      <UpdateModal key={props.id} isOpen={isOpen} isClose={isClose} name={props.name} price={props.price} id={props.id} onSubmit={handleSubmit} />
      <button className="bg-red-500 rounded p-1 mx-2 mt-1" onClick={updateDeleteModal}>Delete</button>
      <DeleteModal  isOpen={deleteOpen} isClose={isDeleteClose} deleteApi={handleDelete} id={props.id}/>
    </div>
  );
};

export default RestaurantCard;
