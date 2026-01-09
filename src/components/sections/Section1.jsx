import React from 'react';

const Section1 = ({ data }) => {
  return (
    <div className="section-1 bg-white p-6 rounded-lg shadow-sm mb-6">
      <div className="flex flex-col md:flex-row items-center gap-6">
        {data.imgUrl && (
          <div className="w-full md:w-1/3">
            <img
              src={data.imgUrl}
              alt={data.name || 'Profile'}
              className="w-full h-auto rounded-lg"
            />
          </div>
        )}
        <div className="flex-1">
          {data.role && <p className="text-blue-600 font-medium mb-2">{data.role}</p>}
          {data.name && <h2 className="text-2xl font-bold text-gray-900 mb-4">{data.name}</h2>}
        </div>
      </div>
    </div>
  );
};

export default Section1;
