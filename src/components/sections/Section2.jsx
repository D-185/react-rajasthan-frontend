import React from 'react';

const Section2 = ({ data }) => {
  return (
    <div className="section-2 bg-gray-50 p-6 rounded-lg shadow-sm mb-6">
      {data.bio && (
        <div className="mb-4">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">About</h3>
          <p className="text-gray-600">{data.bio}</p>
        </div>
      )}
      {data.skills && (
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Skills</h3>
          <p className="text-gray-600">{data.skills}</p>
        </div>
      )}
    </div>
  );
};

export default Section2;
