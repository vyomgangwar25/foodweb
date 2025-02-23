import React from 'react'

const Footer = () => {
  return (
    <div className='w-full h-20 border border-green-900 bg-gray-900 text-white '>
    <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4">
        {/* Left Side */}
        <div className="text-center md:text-left">
          <h1 className="text-lg font-semibold">My Website</h1>
          <p className="text-sm text-gray-400">© 2025 All rights reserved.</p>
        </div>

        {/* Right Side (Links) */}
        <div className="flex space-x-4 mt-3 md:mt-0">
          <a href="/" className="text-gray-400 hover:text-white">Privacy Policy</a>
          <a href="/" className="text-gray-400 hover:text-white">Terms of Service</a>
          <a href="/" className="text-gray-400 hover:text-white">Contact</a>
        </div>
      </div>
     
    </div>
  )
}

export default Footer
