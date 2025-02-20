import React from 'react'

import { FaFaceSmile } from "react-icons/fa6";
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <div className='container w-full  h-20 border border-blue-700'>
      <div className='flex flex-row justify-between'>
        <div>
          <img src="https://img.freepik.com/free-photo/classic-cheese-burger-with-beef-cutlet-vegetables-onions-isolated-white-background_123827-29709.jpg?t=st=1739873628~exp=1739877228~hmac=a81db75a5377e316fbe1fe2920a0e778890a253cce5750df5fc6237dad19abcd&w=996"
            alt="" className='w-16 h-16 mt-2 ml-2' />
        </div>
        <div>
          <ul className='flex space-x-4 mt-5 mr-6 cursor-pointer '>
            <Link to="/"><li>Home</li></Link>

            <Link to="/about"><li>About US</li></Link>
            <li>Contact Us</li>
            <li>Cart</li>
            <Link to="/modal">Modal</Link>

            <li className='w-9 h-16'><FaFaceSmile /></li>

          </ul>
        </div>
      </div>


    </div>
  )
}

export default Header
