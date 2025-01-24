import React, { useState } from 'react';
import { Menu, X, Building2, Phone, Mail } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top bar with contact info */}
        <div className="hidden md:flex justify-end space-x-6 py-2 text-sm text-gray-600 border-b">
          <a href="tel:+243000000000" className="flex items-center gap-2">
            <Phone size={16} />
            <span>+243 00 000 00 00</span>
          </a>
          <a href="mailto:contact@masangi.com" className="flex items-center gap-2">
            <Mail size={16} />
            <span>contact@masangi.com</span>
          </a>
        </div>
        
        {/* Main navigation */}
        <nav className="py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Building2 className="h-8 w-8 text-blue-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">Masangi's Business Center</span>
            </div>

            {/* Desktop menu */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#accueil" className="text-gray-900 hover:text-blue-600">Accueil</a>
              <a href="#services" className="text-gray-900 hover:text-blue-600">Services</a>
              <a href="#espaces" className="text-gray-900 hover:text-blue-600">Nos Espaces</a>
              <a href="#contact" className="text-gray-900 hover:text-blue-600">Contact</a>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
                Réserver
              </button>
            </div>

            {/* Mobile menu button */}
            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile menu */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4">
              <div className="flex flex-col space-y-4">
                <a href="#accueil" className="text-gray-900 hover:text-blue-600">Accueil</a>
                <a href="#services" className="text-gray-900 hover:text-blue-600">Services</a>
                <a href="#espaces" className="text-gray-900 hover:text-blue-600">Nos Espaces</a>
                <a href="#contact" className="text-gray-900 hover:text-blue-600">Contact</a>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 w-full">
                  Réserver
                </button>
              </div>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
}