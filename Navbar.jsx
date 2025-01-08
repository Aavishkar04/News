import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faBars, faBell, faUser } from '@fortawesome/free-solid-svg-icons';

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-4 py-3 border-b border-gray-200">
      {/* Left Section: Menu & Search Icons */}
      <div className="flex items-center gap-4">
        <FontAwesomeIcon icon={faBars} className="text-gray-800 cursor-pointer lg:hidden" />
        <FontAwesomeIcon icon={faMagnifyingGlass} className="text-gray-800 cursor-pointer" />
      </div>

      {/* Center Section: Title */}
      <div className="absolute left-1/2 transform -translate-x-1/2 text-center">
        <h1 className="text-lg font-semibold lg:text-xl">News</h1>
      </div>

      {/* Right Section: Bell, User, and Subscribe */}
      <div className="flex items-center gap-4">
        <FontAwesomeIcon icon={faBell} className="text-gray-800 cursor-pointer hidden sm:block" />
        <div className="hidden md:flex items-center gap-2">
          <FontAwesomeIcon icon={faUser} className="text-gray-800 cursor-pointer" />
          <span className="text-sm">Sign in</span>
        </div>
        <button className="px-4 py-1 text-sm font-medium border border-gray-800 rounded hover:bg-gray-100 hidden sm:block">
          Subscribe
        </button>
      </div>
    </nav>
  );
}
