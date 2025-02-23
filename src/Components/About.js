import React from 'react';

const About = () => {
  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <div className="max-w-3xl bg-white shadow-lg rounded-lg p-8 text-center">
        <h1 className="text-3xl font-bold text-blue-700 mb-4">About Us</h1>
        
        {/* Restaurant Image */}
        <img
          src="https://thumbs.dreamstime.com/b/modern-restaurant-interior-long-tables-set-formal-event-featuring-wooden-columns-contemporary-lighting-large-338479977.jpg"
          alt="Restaurant Interior"
          className="w-full h-60 object-cover rounded-lg mb-4"
        />

        <p className="text-gray-700 text-lg">
          Welcome to our restaurant! We are passionate about serving delicious, high-quality food 
          to our customers. Our team is dedicated to providing an amazing dining experience with fresh 
          ingredients and great flavors.
        </p>

        {/* Chef Image */}
        <img
          src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c"
          alt="Our Chef"
          className="w-full h-60 object-cover rounded-lg my-4"
        />

        <p className="text-gray-700 text-lg mt-4">
          Whether you're here for a quick bite or a family dinner, we ensure that every meal is made 
          with love and care. Thank you for being a part of our journey!
        </p>
      </div>
    </div>
  );
};

export default About;
