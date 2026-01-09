import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_ALL_PAGES } from '../apollo/queries/pages';
import PageCard from '../components/PageCard';

const HomePage = () => {
  const { loading, error, data } = useQuery(GET_ALL_PAGES);

  if (loading) return <div className="min-h-screen flex items-center justify-center">Loading pages...</div>;
  if (error) return <div className="min-h-screen flex items-center justify-center">Error loading pages: {error.message}</div>;

  const pages = data?.pages || [];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-3">Welcome to Our Website</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore our collection of dynamic pages
          </p>
        </div>
        
        {pages.length === 0 ? (
          <div className="text-center py-12 bg-white rounded-lg shadow-sm">
            <p className="text-gray-500">No pages found. Please check back later.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {pages.map((page) => (
              <PageCard key={page.id} page={page} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default HomePage;
