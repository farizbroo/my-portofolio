'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#experience', label: 'Experience' },
  { href: '#portofolio', label: 'Portofolio' },
  { href: '#testimonial', label: 'Testimonial' },
  { href: '#contact', label: 'Contact' },
];

const NavLinks = ({ onClick }: { onClick?: () => void }) => {
  const pathname = usePathname();
  
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    
    // Close mobile menu if it's open
    if (onClick) {
      onClick();
    }
    
    // Smooth scroll to section
    const targetId = href.substring(1);
    const targetElement = document.getElementById(targetId);
    
    if (targetElement) {
      const navbarHeight = 80; // Approximate navbar height
      const targetPosition = targetElement.offsetTop - navbarHeight;
      
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      {navLinks.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          onClick={(e) => handleClick(e, link.href)}
          className={`font-semibold transition-all duration-200 px-4 py-3 rounded-xl relative group
            ${pathname === link.href
              ? 'text-indigo-700 bg-gradient-to-r from-indigo-100 to-indigo-200 shadow-md scale-105'
              : 'text-gray-700 hover:text-indigo-700 hover:bg-gradient-to-r hover:from-indigo-50 hover:to-indigo-100 hover:scale-105'}
          `}
        >
          <span className="relative z-10">{link.label}</span>
          {pathname === link.href && (
            <span className="absolute left-2 right-2 bottom-1 h-1 bg-indigo-200 rounded-full blur-sm opacity-60 z-0 transition-all duration-200" />
          )}
        </Link>
      ))}
    </>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = useCallback(() => setIsOpen((prev) => !prev), []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      if (isOpen && !target.closest('nav')) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      // Prevent body scroll when mobile menu is open
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 border-b
        ${scrolled ? 'bg-white/90 shadow-lg py-2 border-gray-200 backdrop-blur-md' : 'bg-white/70 py-4 border-transparent backdrop-blur-sm'}
      `}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link
            href="/"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({
                top: 0,
                behavior: 'smooth'
              });
            }}
            className="text-2xl font-extrabold tracking-tight text-gray-800 hover:text-indigo-700 transition-colors flex items-center gap-1"
          >
            <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent drop-shadow-md">FARIZ</span>
            <span className="text-indigo-700">.BROO</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex space-x-4 xl:space-x-6">
            <NavLinks />
          </div>

          {/* Tablet Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-800 hover:text-indigo-700 focus:outline-none p-2 rounded-lg border border-gray-200 shadow-sm bg-white/80 backdrop-blur-md transition-all duration-200"
              aria-label="Toggle menu"
              aria-expanded={isOpen}
            >
              {isOpen ? (
                <svg
                  className="w-7 h-7"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="w-7 h-7"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile/Tablet Menu */}
        <div
          className={`lg:hidden transition-all duration-500 ease-in-out overflow-hidden
            ${isOpen ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'}
            bg-white/95 rounded-2xl shadow-2xl border border-gray-200 backdrop-blur-xl
          `}
          style={{ boxShadow: isOpen ? '0 8px 32px 0 rgba(31, 38, 135, 0.15)' : undefined }}
        >
          <div className="flex flex-col space-y-3 py-6 px-6">
            <NavLinks onClick={toggleMenu} />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;