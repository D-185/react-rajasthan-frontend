import React from 'react';

const ErrorState = ({ onRetry, errorMessage = 'Something went wrong', retryText = 'Retry' }) => {
  return (
    <div className="bg-white rounded-2xl p-8 text-center max-w-2xl mx-auto shadow-sm border border-red-100">
      <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
        <svg className="w-8 h-8 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{errorMessage}</h3>
      <p className="text-gray-600 mb-4">We couldn't load the pages. Please try again later.</p>
      <button 
        onClick={onRetry}
        className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
      >
        {retryText}
      </button>
    </div>
  );
};

export default ErrorState;
