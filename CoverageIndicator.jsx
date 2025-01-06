import React from 'react';

const CoverageIndicator = ({ leftPercentage = 46 }) => {
  const rightPercentage = 100 - leftPercentage;
  
  return (
    <div className="w-1/2 max-w-md mx-auto ">
      <div className="relative h-3 flex bg-gray-200  overflow-hidden">
        {/* Left coverage (red) */}
        <div 
          className="bg-blue-600" 
          style={{ width: `${leftPercentage}%`,height:'40px' }}
        />
        {/* Right coverage (blue) */}
        <div 
          className="bg-red-600" 
          style={{ width: `${rightPercentage}%`,height:'40px' }}
        />
      </div>
      
      {/* Coverage text */}
      <div className="mt-1 text-sm text-gray-600">
        {leftPercentage}% coverage: {rightPercentage} sources
      </div>
    </div>
  );
};

export default CoverageIndicator;
