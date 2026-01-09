import React from 'react';

const socialIcons = {
  linkedin: 'M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z',
  github: 'M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z',
  portfolio: 'M3.5 0c-1.3 0-2.484.48-3.337 1.273C-.69 2.066 0 3.2 0 4.5v15c0 1.3.484 2.484 1.273 3.337C2.066 23.69 3.2 24 4.5 24h15c1.3 0 2.484-.484 3.337-1.273C23.69 21.834 24 20.7 24 19.5v-15c0-1.3-.484-2.484-1.273-3.337C21.834.31 20.7 0 19.5 0h-16zM4 4h16v16H4V4zm3 2v12h10V6H7zm2 2h6v2H9V8zm0 4h6v2H9v-2z',
};

const Section3 = ({ data }) => {
  return (
    <div className="section-3 bg-white p-6 rounded-lg shadow-sm mb-6">
      {data.socialLinks?.length > 0 && (
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Connect With Me</h3>
          <div className="flex flex-wrap gap-4">
            {data.socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
              >
                {socialIcons[link.type] ? (
                  <svg
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d={socialIcons[link.type]} />
                  </svg>
                ) : (
                  <span className="w-5 h-5 flex items-center justify-center">
                    {link.type.charAt(0).toUpperCase() + link.type.slice(1)}
                  </span>
                )}
                <span className="text-sm font-medium">
                  {link.type.charAt(0).toUpperCase() + link.type.slice(1)}
                </span>
              </a>
            ))}
          </div>
        </div>
      )}
      
      {data.projects && (
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Projects</h3>
          <p className="text-gray-600">{data.projects}</p>
        </div>
      )}
    </div>
  );
};

export default Section3;
