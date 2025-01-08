import React from 'react';
import Lcard from './Lcard';
import Rcard from './Rcard';
import Mcard from './Mcard';

export default function CardContainer() {
  return (
    <div className="w-full min-h-screen bg-slate-50 p-4">
      <div className="container mx-auto">
        {/* Main grid container */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
          {/* Left section - Priority 1 */}
          <div className="lg:col-span-6 xl:col-span-4">
            <Lcard customClass="w-full ml-0" />
          </div>

          {/* Right section - Priority 2 */}
          <div className="lg:col-span-6 xl:col-span-4">
            <div className="h-full">
              <Rcard />
            </div>
          </div>

          {/* Middle section - Priority 3 */}
          <div className="lg:col-span-12 xl:col-span-4">
            <div className="h-full">
              <Mcard />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}