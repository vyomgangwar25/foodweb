import React from "react";
import { FaFaceSmile } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="w-full h-20 border-b-2 border-blue-700 bg-white shadow-md">
      <div className="container mx-auto flex justify-between items-center h-full px-5">
      
        <div className="flex items-center">
          <img
            src="https://img.freepik.com/free-photo/classic-cheese-burger-with-beef-cutlet-vegetables-onions-isolated-white-background_123827-29709.jpg?t=st=1739873628~exp=1739877228~hmac=a81db75a5377e316fbe1fe2920a0e778890a253cce5750df5fc6237dad19abcd&w=996"
            alt="Logo"
            className="w-16 h-16 object-cover rounded-full"
          />
        </div>

        {/* Navigation */}
        <div>
          <ul className="flex items-center space-x-6 text-lg font-medium text-gray-700">
            <Link to="/" className="hover:text-blue-600 transition duration-300">
              <li>Home</li>
            </Link>
            <Link to="/about" className="hover:text-blue-600 transition duration-300">
              <li>About Us</li>
            </Link>
            <li className="hover:text-blue-600 transition duration-300 cursor-pointer">Contact Us</li>
            <li className="hover:text-blue-600 transition duration-300 cursor-pointer">Cart</li>
            <li className="w-9 h-9 flex items-center justify-center text-blue-600">
              <FaFaceSmile size={28} />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
