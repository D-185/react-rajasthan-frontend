import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_ALL_PAGES } from '../apollo/queries/pages';
import PageCard from '../components/PageCard';
import CardSkeleton from '../components/skeletons/CardSkeleton';
import ErrorState from '../components/error/ErrorState';
import { Button, Card } from 'flowbite-react';

const HomePage = () => {
  const { loading, error, data } = useQuery(GET_ALL_PAGES, {
    fetchPolicy: 'cache-and-network',
  });

  const pages = data?.pages || [];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header with fixed height */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <h1 className="text-2xl font-bold text-gray-900">Portfolio</h1>
            <nav className="hidden md:flex space-x-8">
              <a href="#" className="text-gray-900 hover:text-blue-600">Home</a>
              <a href="#projects" className="text-gray-500 hover:text-blue-600">Projects</a>
              <a href="#about" className="text-gray-500 hover:text-blue-600">About</a>
              <a href="#contact" className="text-gray-500 hover:text-blue-600">Contact</a>
            </nav>
            <button className="md:hidden text-gray-500">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      <main className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Discover Our Collection</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Browse through our handpicked selection of destinations and experiences
            </p>
          </div>

          {error ? (
            <ErrorState 
              onRetry={() => window.location.reload()}
              errorMessage="Something went wrong"
              retryText="Retry"
            />
          ) : pages.length === 0 && !loading ? (
            <Card className="max-w-2xl mx-auto p-8 text-center">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-blue-50 flex items-center justify-center text-blue-500">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">No pages found</h3>
              <p className="text-gray-600 mb-6">We couldn't find any pages to display at the moment.</p>
              <Button gradientDuoTone="purpleToBlue">
                <svg className="w-5 h-5 mr-2 -ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
                Create New Page
              </Button>
            </Card>
          ) : (
            <div className="flex flex-wrap gap-6">
              {loading && !pages.length
                ? Array(8).fill(0).map((_, i) => (
                    <div key={i} className="sm:w-[calc(50%-12px)] lg:w-[calc(25%-18px)]">
                      <CardSkeleton className="h-64 w-full" />
                    </div>
                  ))
                : pages.map((page) => (
                    <div key={page.id} className="sm:w-[calc(50%-12px)] lg:w-[calc(25%-18px)]">
                      <PageCard page={page} className="h-full w-full" />
                    </div>
                  ))}
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default HomePage;