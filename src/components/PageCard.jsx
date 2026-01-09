import React from 'react';
import { Link } from 'react-router-dom';

const PageCard = ({ page }) => {
  const heroSection = page.dynamic?.find(
    (section) => section.__typename === 'ComponentSharedSection1' && section.imgUrl
  );

  return (
    <div className="flex flex-col h-full">
      <Link 
        to={`/${page.slug}`}
        className="group flex-1 flex flex-col overflow-hidden rounded-xl bg-white shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 hover:border-blue-100"
      >
        <div className="w-full h-48 overflow-hidden bg-gray-100 flex items-center justify-center">
          {heroSection?.imgUrl ? (
            <img
              src={heroSection.imgUrl}
              alt={heroSection.name || page.title}
              className="max-w-full max-h-full object-contain transition-transform duration-500 group-hover:scale-105"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = 'https://via.placeholder.com/400x300?text=No+Image';
              }}
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gray-100 text-gray-400">
              <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
          )}
        </div>
        <div className="p-5 flex-1 flex flex-col">
          <h2 className="text-xl font-semibold text-gray-900 mb-2 line-clamp-2">{page.title}</h2>
          {heroSection?.role && (
            <p className="text-gray-600 mb-4">{heroSection.role}</p>
          )}
          <div className="mt-auto pt-4">
            <div className="flex items-center text-blue-600 group-hover:text-blue-800 transition-colors">
              <span>View Page</span>
              <svg
                className="w-4 h-4 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default PageCard;
