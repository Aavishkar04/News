import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsis } from '@fortawesome/free-solid-svg-icons';

export default function Subav() {
  const MyButton = () => {
    return (
      <button className="w-10 h-10 bg-black flex justify-center items-center">
        <FontAwesomeIcon icon={faEllipsis} style={{ color: "#ffffff" }} />
      </button>
    );
  };

  return (
    <div className="Subav flex flex-col sm:flex-row items-center justify-between px-4 py-2 border-b border-gray-200">
      {/* Date Section */}
      <div className="date text-left text-xs font-semibold tracking-tight sm:ml-4 sm:mr-8 mb-2">
        <p>Sunday</p>
        <p>17, April, 2022</p>
      </div>

      {/* Categories Section */}
      <div className="flex flex-wrap justify-center sm:justify-between space-x-4 sm:space-x-20 space-y-2 sm:space-y-0">
        <p>World</p>
        <p>Politics</p>
        <p>Business</p>
        <p>Opinion</p>
        <p>Tech</p>
        <p>Science</p>
        <p>Sport</p>
        <p>Arts</p>
        <p>Books</p>
        <p>Style</p>
        <p>Food</p>
        <p>Travel</p>
        <p>Magazine</p>
        <p>Movies</p>
        <MyButton />
      </div>
    </div>
  );
}
