import React from 'react';
import { useParams } from 'react-router-dom';
import { usePageData } from '../apollo/hooks/usePageData';
import Section1 from '../components/sections/Section1';
import Section2 from '../components/sections/Section2';
import Section3 from '../components/sections/Section3';
import CardSkeleton from '../components/skeletons/CardSkeleton';
import ErrorState from '../components/error/ErrorState';

const DynamicPage = () => {
  const { slug } = useParams();
  const { loading, error, page } = usePageData(slug);

  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
        {[...Array(3)].map((_, i) => (
          <CardSkeleton key={`skeleton-${i}`} className="h-64" />
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <ErrorState 
        errorMessage="Failed to load page data"
        onRetry={() => window.location.reload()}
        retryText="Try Again"
      />
    );
  }

  if (!page) {
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-semibold text-gray-700">Page not found</h2>
        <p className="mt-2 text-gray-500">The requested page could not be found.</p>
      </div>
    );
  }

  return (
    <div className="space-y-12">
      {page.dynamic?.map((section, index) => {
        if (!section || !section.__typename) return null;

        switch (section.__typename) {
          case 'ComponentSharedSection1':
            return <Section1 key={`${section.__typename}-${index}`} data={section} />;
          case 'ComponentSharedSection2':
            return <Section2 key={`${section.__typename}-${index}`} data={section} />;
          case 'ComponentSharedSection3':
            return <Section3 key={`${section.__typename}-${index}`} data={section} />;
          default:
            console.warn(`No component found for section type: ${section.__typename}`);
            return null;
        }
      })}
    </div>
  );
};

export default DynamicPage;
