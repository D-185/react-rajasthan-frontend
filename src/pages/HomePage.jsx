import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="text-center py-12">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">Welcome to Our Website</h1>
      <p className="text-xl text-gray-600 mb-8">
        Discover amazing content and explore our dynamic pages
      </p>
      <div className="space-x-4">
        <Link 
          to="/about" 
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Learn More
        </Link>
        <Link 
          to="/contact" 
          className="bg-white text-blue-600 border border-blue-600 px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors"
        >
          Contact Us
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
