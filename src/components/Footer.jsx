import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-2">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0 text-center">
            <h3 className="text-xl font-bold">Strapi Demo</h3>
            <p className="text-gray-400">Building amazing web experiences</p>
          </div>
          © {new Date().getFullYear()} All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
