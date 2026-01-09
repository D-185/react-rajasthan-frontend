import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const MainLayout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="pt-16"> {/* This div adds spacing equal to the header height */}
        <main className="flex-grow container mt-5 mx-auto px-4 py-8">
          {children}
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default MainLayout;
