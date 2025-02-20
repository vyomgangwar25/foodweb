import React, { useEffect, useState } from 'react'
import RestaurantCard from './Components/RestaurantCard'
import Modal from './Components/Modal'
const Body = () => {
  const [searchText, setSearchText] = useState('')
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  const searchApi = async () => {
    try {
      const data = await fetch(`http://localhost:8080/items/search?text=${searchText}`);
      const json = await data.json();
      setIems(json)
    }
    catch (err) {
      console.log(err)
    }
  }

  const itemsApi = async () => {
    try {
      const data = await fetch("http://localhost:8080/items/list");
      const json = await data.json();
      setIems(json)
    }
    catch (err) {
      console.log(err)
    }
  }

  const handleData=async(data)=>{
    console.log(data)
    console.log("data submitted")
  }

  useEffect(() => {
    if (searchText.length === 0) {
      itemsApi();
    }
  }, [searchText])

  const [items, setIems] = useState([]);
  return (
    <div class="w-full h-4/5 border border-red-900">
      <div className='mt-2 flex justify-between m-5'>
        <div>
        <input type="text" className='border border-black   p-2 rounded-l' value={searchText} onChange={(e) => setSearchText(e.target.value)} />
        <button className='bg-blue-400    p-2 rounded-r hover:bg-blue-500 ' onClick={searchApi}>Search</button>
        </div>
        <div className=''>
          <button className='bg-blue-400 p-2 w-14 rounded-lg' onClick={handleOpenModal}>Add</button>
          <Modal isOpen={isModalOpen} onClose={handleCloseModal} onSubmit={handleData}   />
        </div>
        
      </div>
      <div class="flex  flex-wrap ml-5 gap-5  mt-5 ">
        {items.map((item, ind) => <RestaurantCard key={item.id} name={item.name} price={item.price} rating={item.rating} />)}
      </div>

    </div>

  )
}

export default Body
