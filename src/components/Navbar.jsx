import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Bars3Icon as MenuIcon, XMarkIcon as XIcon, MagnifyingGlassIcon as SearchIcon } from '@heroicons/react/24/outline';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-emerald-800 text-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-2xl font-bold">علماء المغرب</Link>
          
          <div className="hidden md:flex space-x-8 items-center">
            <SearchBar />
            <NavLinks />
          </div>

          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <XIcon className="h-6 w-6" />
            ) : (
              <MenuIcon className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <SearchBar />
            <NavLinks mobile />
          </div>
        </div>
      )}
    </nav>
  );
}

function SearchBar() {
  return (
    <div className="relative">
      <input
        type="text"
        placeholder="ابحث عن عالم أو موضوع..."
        className="w-full md:w-64 px-4 py-1 text-gray-800 rounded-full focus:outline-none"
      />
      <SearchIcon className="absolute left-3 top-1.5 h-5 w-5 text-gray-400" />
    </div>
  );
}

function NavLinks({ mobile }) {
  const links = [
    { name: 'العلماء والقراء', path: '/scholars' },
    { name: 'المكتبة', path: '/library' },
    { name: 'المقالات', path: '/articles' },
    { name: 'الأسئلة والأجوبة', path: '/qa' },
  ];

  const baseStyles = mobile
    ? 'block px-3 py-2 rounded-md text-right hover:bg-emerald-700'
    : 'text-white hover:text-emerald-200';

  return links.map((link) => (
    <Link
      key={link.path}
      to={link.path}
      className={baseStyles}
    >
      {link.name}
    </Link>
  ));
}

export default Navbar;