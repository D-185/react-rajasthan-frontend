import React from 'react';
import { useParams } from 'react-router-dom';
import { usePageData } from '../apollo/hooks/usePageData';
import DynamicSection from '../components/sections/DynamicSection';

const DynamicPage = () => {
  const { slug } = useParams();
  const { loading, error, page } = usePageData(slug);
  console.log('pageaa', page)

  if (loading) return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  if (error) return <div className="min-h-screen flex items-center justify-center">Error: {error.message}</div>;
  if (!page) return <div className="min-h-screen flex items-center justify-center">Page not found</div>;

  return (
    <div className="min-h-screen">
      <header className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">{page.title}</h1>
        </div>
      </header>
      
      <main>
        {page.dynamic?.map((section, index) => (
          <DynamicSection key={`${section.__typename}-${index}`} section={section} />
        ))}
      </main>
    </div>
  );
};

export default DynamicPage;
