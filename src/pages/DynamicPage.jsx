import React from 'react';
import { useParams } from 'react-router-dom';
import { usePageData } from '../apollo/hooks/usePageData';
import DynamicSection from '../components/sections/DynamicSection';
import { FaGithub, FaLinkedin, FaEnvelope, FaCode, FaBriefcase, FaGraduationCap } from 'react-icons/fa';

const DynamicPage = () => {
  const { slug } = useParams();
  const { loading, error, page } = usePageData(slug);

  if (loading) return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  if (error) return <div className="min-h-screen flex items-center justify-center">Error: {error.message}</div>;
  if (!page) return <div className="min-h-screen flex items-center justify-center">Page not found</div>;

  // Extract the first section with an image for the hero
  const heroSection = page.dynamic?.find(section => section.imgUrl);
  
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Fixed Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <h1 className="text-2xl font-bold text-gray-900">{page.title || 'Portfolio'}</h1>
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

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white pt-24 pb-20">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
          {heroSection?.imgUrl && (
            <div className="md:w-1/3 mb-8 md:mb-0 md:mr-12">
              <div className="w-48 h-48 md:w-64 md:h-64 mx-auto rounded-full overflow-hidden border-4 border-white shadow-xl">
                <img 
                  src={heroSection.imgUrl} 
                  alt={page.title || 'Portfolio'} 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          )}
          
          <div className="md:flex-1 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{page.title || 'My Portfolio'}</h1>
            <p className="text-xl md:text-2xl mb-6 text-blue-100">
              {heroSection?.role || 'Full Stack Developer'}
            </p>
            <p className="text-lg mb-8 max-w-2xl">
              {heroSection?.description || 'Passionate about creating beautiful and functional web applications.'}
            </p>
            <div className="flex justify-center md:justify-start space-x-4">
              <a href="#" className="bg-white text-blue-600 px-6 py-2 rounded-full font-medium hover:bg-gray-100 transition">
                Download CV
              </a>
              <a href="#contact" className="bg-transparent border-2 border-white px-6 py-2 rounded-full font-medium hover:bg-white hover:text-blue-600 transition">
                Contact Me
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-16">
        {/* About Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">About Me</h2>
          <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md overflow-hidden p-8">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="md:col-span-2">
                <h3 className="text-2xl font-semibold mb-4">Who am I?</h3>
                <p className="text-gray-700 mb-6">
                  {heroSection?.bio || 'I am a passionate developer with expertise in modern web technologies. I love turning ideas into reality through clean and efficient code.'}
                </p>
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center">
                    <FaCode className="text-blue-500 mr-2" />
                    <span>5+ Years Experience</span>
                  </div>
                  <div className="flex items-center">
                    <FaBriefcase className="text-blue-500 mr-2" />
                    <span>50+ Projects</span>
                  </div>
                  <div className="flex items-center">
                    <FaGraduationCap className="text-blue-500 mr-2" />
                    <span>Computer Science</span>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <h4 className="font-semibold text-lg">My Skills</h4>
                {['React', 'Node.js', 'JavaScript', 'TypeScript', 'GraphQL', 'MongoDB'].map((skill) => (
                  <div key={skill} className="w-full bg-gray-200 rounded-full h-2.5">
                    <div 
                      className="bg-blue-600 h-2.5 rounded-full" 
                      style={{ width: `${70 + Math.random() * 30}%` }}
                    ></div>
                    <div className="flex justify-between text-sm text-gray-600 mt-1">
                      <span>{skill}</span>
                      <span>{Math.floor(70 + Math.random() * 30)}%</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">My Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {page.dynamic?.map((section, index) => (
              <div key={`${section.__typename}-${index}`} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow">
                {section.imgUrl && (
                  <img 
                    src={section.imgUrl} 
                    alt={section.name || 'Project'} 
                    className="w-full h-48 object-cover"
                  />
                )}
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{section.name || 'Project Title'}</h3>
                  <p className="text-gray-600 mb-4">
                    {section.description || 'A brief description of the project and the technologies used.'}
                  </p>
                  <div className="flex justify-between items-center">
                    <div className="flex space-x-2">
                      <span className="px-3 py-1 text-sm bg-blue-100 text-blue-800 rounded-full">
                        {section.role || 'Web Dev'}
                      </span>
                    </div>
                    <a 
                      href="#" 
                      className="text-blue-600 hover:text-blue-800 font-medium"
                    >
                      View Project →
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="bg-white rounded-xl shadow-md p-8 max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Get In Touch</h2>
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Feel free to reach out to me for any questions or opportunities. I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
            </p>
            <div className="flex flex-col items-center space-y-6">
              <div className="flex items-center text-lg">
                <FaEnvelope className="text-blue-500 mr-3 text-xl" />
                <a href="mailto:email@example.com" className="hover:text-blue-600 transition-colors">
                  email@example.com
                </a>
              </div>
              <div className="flex space-x-6 pt-4">
                <a 
                  href="#" 
                  className="bg-gray-100 hover:bg-gray-200 p-3 rounded-full transition-colors"
                  aria-label="GitHub"
                >
                  <FaGithub className="text-2xl text-gray-700" />
                </a>
                <a 
                  href="#" 
                  className="bg-gray-100 hover:bg-gray-200 p-3 rounded-full transition-colors"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin className="text-2xl text-blue-700" />
                </a>
                <a 
                  href="#" 
                  className="bg-gray-100 hover:bg-gray-200 p-3 rounded-full transition-colors"
                  aria-label="Email"
                >
                  <FaEnvelope className="text-2xl text-red-500" />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 mt-20">
        <div className="container mx-auto px-4 text-center">
          <p>© {new Date().getFullYear()} {page.title || 'My Portfolio'}. All rights reserved.</p>
          <div className="flex justify-center space-x-6 mt-4">
            <a href="#" className="text-gray-400 hover:text-white">
              <FaGithub className="text-xl" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <FaLinkedin className="text-xl" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <FaEnvelope className="text-xl" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default DynamicPage;
