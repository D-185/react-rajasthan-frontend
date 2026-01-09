import React from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { GET_ALL_PAGES } from '../apollo/queries/pages';

const HomePage = () => {
  const { loading, error, data } = useQuery(GET_ALL_PAGES);

  if (loading) return <div className="min-h-screen flex items-center justify-center">Loading pages...</div>;
  if (error) return <div className="min-h-screen flex items-center justify-center">Error loading pages: {error.message}</div>;

  const pages = data?.pages || [];

  return (
    <div className="py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 mb-2 text-center">Welcome to Our Website</h1>
        <p className="text-xl text-gray-600 mb-12 text-center">
          Explore our collection of dynamic pages
        </p>
        
        {pages.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500">No pages found. Please check back later.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pages.map((page) => {
              // Try to find a section with an image for the card
              const heroSection = page.dynamic?.find(
                (section) => section.__typename === 'ComponentSharedSection1' && section.imgUrl
              );

              return (
                <Link 
                  key={page.id}
                  to={`/${page.slug}`}
                  className="group block overflow-hidden rounded-lg border border-gray-200 hover:shadow-lg transition-shadow duration-300"
                >
                  {heroSection?.imgUrl && (
                    <div className="h-48 overflow-hidden">
                      <img
                        src={heroSection.imgUrl}
                        alt={heroSection.name || page.title}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                  )}
                  <div className="p-6">
                    <h2 className="text-xl font-semibold text-gray-800 mb-2">{page.title}</h2>
                    {heroSection?.role && (
                      <p className="text-gray-600 mb-4">{heroSection.role}</p>
                    )}
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
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default HomePage;
