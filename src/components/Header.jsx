import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home } from 'lucide-react';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    document.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  const isActive = (path) => location.pathname === path;

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-sm shadow-md' : 'bg-white/90'}`}
    >
      <nav className="container mx-auto px-4 py-3 bg-white from-white/80 via-white/80 to-transparent">
        <div className="flex justify-between items-center">
          <div className="flex-1 flex justify-center">
            <Link 
              to="/" 
              className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-50 text-blue-600 hover:bg-blue-100 transition-colors duration-200"
              title="Home"
            >
              <Home className="w-6 h-6" />
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

const NavLink = ({ to, children, isActive }) => (
  <Link 
    to={to}
    className={`flex items-center px-3 py-2 text-sm font-medium rounded-md transition-all duration-200 ${
      isActive 
        ? 'text-blue-600 bg-blue-50' 
        : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
    }`}
  >
    {children}
  </Link>
);

export default Header;
