import React from 'react'

const RestaurantCard = (props) => {
  return (
    <div className='w-48 h-60   bg-gray-300 hover:bg-gray-400 cursor-pointer rounded  '>
      <div className='w-40 mt-2 h-32   ml-4 flex items-center justify-center'>
        <img src="https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&webp=true&resize=375,341"
          className='w-40 h-32 rounded'
          alt="" />
      </div>
      <h1> name is {props.name}</h1>
      <h1>price is {props.price}</h1>
      <h1>rating is {props.rating}</h1>
    </div>
  )
}

export default RestaurantCard
