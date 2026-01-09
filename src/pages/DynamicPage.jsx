import React from 'react';

const DynamicPage = ({ pageData }) => {
  // This component will render dynamic content based on the pageData prop
  // pageData will be fetched from Strapi based on the route
  
  if (!pageData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="dynamic-page">
      {pageData.title && <h1 className="text-3xl font-bold mb-6">{pageData.title}</h1>}
      {pageData.content && (
        <div 
          className="prose max-w-none" 
          dangerouslySetInnerHTML={{ __html: pageData.content }} 
        />
      )}
    </div>
  );
};

export default DynamicPage;
