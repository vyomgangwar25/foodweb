import React from "react";
import { FaFaceSmile } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const token = localStorage.getItem("jwtToken");
  const navigate = useNavigate();
  const togelDropDown = () => {

    setIsDropdownOpen((prev) => !prev);

  };
  const handleLogout = () => {
    localStorage.removeItem("jwtToken")
    setIsDropdownOpen(false)
    navigate("/login")
  }
  return (
    <div className="w-full h-20 border-b-2 border-blue-400 bg-blue-400 shadow-md">
      <div className="container mx-auto flex justify-between items-center h-full px-5">
        <div className="flex items-center">
          <img
            src="https://img.freepik.com/free-photo/classic-cheese-burger-with-beef-cutlet-vegetables-onions-isolated-white-background_123827-29709.jpg?t=st=1739873628~exp=1739877228~hmac=a81db75a5377e316fbe1fe2920a0e778890a253cce5750df5fc6237dad19abcd&w=996"
            alt="Logo"
            className="w-16 h-16 object-cover rounded-full"
          />

        </div>

        <div>
          <ul className="flex items-center space-x-6 text-lg font-medium text-gray-700">
            {!token && (
              <Link
                to="/"
                className="hover:text-blue-600 text-white transition duration-300"
              >
                <li>Home</li>
              </Link>
            )}
            {token && (
              <Link
                to="/about"
                className="hover:text-blue-600 transition duration-300 text-white"
              >
                <li>About Us</li>
              </Link>
            )}
            {!token && (
              <Link to="/login">
                {" "}
                <li className="hover:text-blue-600 transition duration-300 cursor-pointer  text-white ">
                  Login{" "}
                </li>
              </Link>
            )}
            {!token && (
              <Link to="/registration">
                {" "}
                <li className="hover:text-blue-600 transition duration-300 cursor-pointer  text-white">
                  Registration
                </li>
              </Link>
            )}
            {token && (
              <li className="hover:text-blue-600 transition duration-300 cursor-pointer  text-white">
                Contact Us
              </li>
            )}
            {token && (
              <li className="hover:text-blue-600 transition duration-300 cursor-pointer  text-white">
                Cart
              </li>
            )}
            <div className="relative">
              {token && (
                <button
                  className="w-9 h-9 flex items-center justify-center   text-white"
                  onClick={togelDropDown}
                >
                  <FaFaceSmile size={28} />
                </button>
              )}
              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-36 bg-white shadow-lg rounded-md border">
                  <ul className="text-gray-700 text-sm">
                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer ">
                      <Link to="/profile">User Profile</Link>
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-red-600" onClick={handleLogout}>
                      Logout
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
