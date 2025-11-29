'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-primary/95 backdrop-blur-md text-white shadow-lg sticky top-0 z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold tracking-wide">
              Eleam Los Andes
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link href="/" className="hover:bg-primary-dark px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Inicio
              </Link>
              <Link href="/nosotros" className="hover:bg-primary-dark px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Nosotros
              </Link>
              <Link href="/centros" className="hover:bg-primary-dark px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Centros
              </Link>
              <Link href="/transparencia" className="hover:bg-primary-dark px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Transparencia
              </Link>
              <Link href="/contactos" className="bg-secondary text-primary-dark hover:bg-white px-3 py-2 rounded-md text-sm font-bold transition-colors">
                Contactos
              </Link>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="bg-primary-dark inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white hover:bg-opacity-75 focus:outline-none"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Abrir menú principal</span>
              {!isOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      {isOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="/" className="hover:bg-primary-dark block px-3 py-2 rounded-md text-base font-medium" onClick={toggleMenu}>
              Inicio
            </Link>
            <Link href="/nosotros" className="hover:bg-primary-dark block px-3 py-2 rounded-md text-base font-medium" onClick={toggleMenu}>
              Nosotros
            </Link>
            <Link href="/centros" className="hover:bg-primary-dark block px-3 py-2 rounded-md text-base font-medium" onClick={toggleMenu}>
              Centros
            </Link>
            <Link href="/transparencia" className="hover:bg-primary-dark block px-3 py-2 rounded-md text-base font-medium" onClick={toggleMenu}>
              Transparencia
            </Link>
            <Link href="/contactos" className="bg-secondary text-primary-dark hover:bg-white block px-3 py-2 rounded-md text-base font-bold" onClick={toggleMenu}>
              Contactos
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
