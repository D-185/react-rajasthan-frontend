import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { cn } from '../lib/utils';

const PageCard = ({ page, className }) => {
  const [isHovered, setIsHovered] = useState(false);
  const heroSection = page.dynamic?.find(
    (section) => section.__typename === 'ComponentSharedSection1' && section.imgUrl
  );

  return (
    <div 
      className={cn("group relative h-full transition-all duration-300 hover:z-10", className)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link to={`/${page.slug}`} className="h-full block">
        <Card className="h-full flex flex-col overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border border-gray-200 dark:border-gray-700">
          {/* Image Section */}
          <div className="relative aspect-[4/3] overflow-hidden bg-gray-100 dark:bg-gray-800">
            {heroSection?.imgUrl ? (
              <>
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
                <img
                  src={heroSection.imgUrl}
                  alt={heroSection.name || page.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = 'https://via.placeholder.com/800x600?text=No+Image';
                  }}
                  loading="lazy"
                />
              </>
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-gray-100 dark:bg-gray-800">
                <svg 
                  className="w-16 h-16 text-gray-300 dark:text-gray-600 group-hover:text-blue-500 transition-colors duration-300" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth="1" 
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" 
                  />
                </svg>
              </div>
            )}
          </div>
          
          {/* Content Section */}
          <div className="flex flex-col flex-1 p-4">
            <CardHeader className="p-0 mb-2">
              <CardTitle className="text-lg font-semibold line-clamp-2 text-gray-900 dark:text-white">
                {page.title}
              </CardTitle>
              {heroSection?.role && (
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                  {heroSection.role}
                </p>
              )}
            </CardHeader>
            
            <CardFooter className="p-0 mt-auto">
              <Button 
                variant="ghost" 
                className={cn(
                  "w-full justify-between group-hover:bg-gray-50 dark:group-hover:bg-gray-700/50",
                  isHovered ? "text-blue-600 dark:text-blue-400" : ""
                )}
              >
                Explore More
                <svg
                  className={`w-4 h-4 ml-2 transform transition-transform duration-300 ${
                    isHovered ? 'translate-x-1' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.5"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </Button>
            </CardFooter>
          </div>
        </Card>
      </Link>
    </div>
  );
};

export default PageCard;
