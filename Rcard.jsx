import React from 'react';

export default function Rcard() {
  return (
    <div className="Rcard flex justify-center p-0 m-0">
      <a 
        href="#" 
        className="flex flex-col bg-white border border-gray-200 rounded-lg shadow-md 
                  sm:flex-row sm:max-w-lg md:max-w-md lg:max-w-lg iphone-se:max-w-xs surface-duo:max-w-sm
                  hover:bg-gray-100 text-black"
      >
        <img 
          className="object-cover w-full h-64 sm:h-auto sm:w-48 iphone-se:h-40 surface-duo:h-48" 
          src="https://placehold.co/600x400/png" 
          alt="Technology"
        />
        <div className="flex flex-col justify-between p-4 leading-normal">
          <button 
            type="button" 
            className="text-black-100 focus:outline-none font-normal rounded-sm text-sm px-2 py-1 
                      border border-slate-300 font-semibold w-16 mb-4"
          >
            Dark
          </button>
          <p className="text-md font-bold tracking-tight text-black text-left">
            Noteworthy technology acquisitions 2021
          </p>
          <a 
            href="#" 
            className="text-left text-xs text-blue-800 font-bold underline mt-2"
          >
            Continue Reading
          </a>
        </div>
      </a>
    </div>
  );
}
