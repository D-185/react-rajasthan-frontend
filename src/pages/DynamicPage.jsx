import React from 'react';
import { useParams } from 'react-router-dom';
import { usePageData } from '../apollo/hooks/usePageData';

const Section1 = ({ data }) => (
  <section className="py-12 bg-white">
    <div className="container mx-auto px-4">
      <div className="flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
          <h2 className="text-4xl font-bold mb-4">{data.name}</h2>
          <p className="text-xl text-gray-600 mb-6">{data.role}</p>
        </div>
        {data.imgUrl && (
          <div className="md:w-1/2">
            <img 
              src={data.imgUrl} 
              alt={data.name} 
              className="rounded-lg shadow-xl w-full h-auto max-w-md mx-auto"
            />
          </div>
        )}
      </div>
    </div>
  </section>
);

const Section2 = ({ data }) => (
  <section className="py-12 bg-gray-50">
    <div className="container mx-auto px-4">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">About Me</h2>
        <p className="text-lg text-gray-700 mb-8">{data.bio}</p>
        <div className="mt-8">
          <h3 className="text-xl font-semibold mb-4">Skills</h3>
          <div className="flex flex-wrap gap-2">
            {data.skills?.map((skill, index) => (
              <span 
                key={index}
                className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Section3 = ({ data }) => (
  <section className="py-12 bg-white">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold mb-8 text-center">My Work</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.projects?.map((project, index) => (
          <div key={index} className="border rounded-lg p-6 hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold mb-2">Project {index + 1}</h3>
            <p className="text-gray-600">{project}</p>
          </div>
        ))}
      </div>
      
      {data.socialLinks?.length > 0 && (
        <div className="mt-12 text-center">
          <h3 className="text-xl font-semibold mb-4">Connect With Me</h3>
          <div className="flex justify-center space-x-4">
            {data.socialLinks.map((link, index) => (
              <a 
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 transition-colors"
              >
                {link.type}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  </section>
);

const DynamicPage = () => {
  const { slug } = useParams();
  const { loading, error, page } = usePageData(slug);

  if (loading) return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  if (error) return <div className="min-h-screen flex items-center justify-center">Error: {error.message}</div>;
  if (!page) return <div className="min-h-screen flex items-center justify-center">Page not found</div>;

  const renderSection = (section, index) => {
    switch (section.__typename) {
      case 'ComponentSharedSection1':
        return <Section1 key={section.id || index} data={section} />;
      case 'ComponentSharedSection2':
        return <Section2 key={section.id || index} data={section} />;
      case 'ComponentSharedSection3':
        return <Section3 key={section.id || index} data={section} />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen">
      <header className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">{page.title}</h1>
        </div>
      </header>
      
      <main>
        {page.dynamic?.map((section, index) => renderSection(section, index))}
      </main>
    </div>
  );
};

export default DynamicPage;
