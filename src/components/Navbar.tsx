
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Flame, ShoppingCart } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useCart } from '@/contexts/CartContext';
import LanguageSwitcher from './LanguageSwitcher';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useLanguage();
  const { getTotalItems } = useCart();
  const location = useLocation();

  const navItems = [
    { name: t('home'), path: '/' },
    { name: t('fireworks'), path: '/fireworks' },
    { name: t('packages'), path: '/packages' },
    { name: t('permits'), path: '/permits' },
    { name: t('testimonials'), path: '/testimonials' },
    { name: t('contact'), path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;
  const totalItems = getTotalItems();

  return (
    <nav className="bg-black/95 backdrop-blur-sm border-b border-red-900/20 fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 flex-shrink-0">
            <Flame className="w-8 h-8 text-red-500" />
            <span className="text-xl sm:text-2xl font-bold explosive-text">MercunMurah</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`font-medium transition-colors hover:text-red-400 ${
                  isActive(item.path) ? 'text-red-500' : 'text-white'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Right side items */}
          <div className="flex items-center space-x-2 sm:space-x-4 flex-shrink-0">
            <div className="hidden lg:block">
              <LanguageSwitcher />
            </div>
            <Link
              to="/cart"
              className="relative p-2 text-white hover:text-red-400 transition-colors"
              data-cart-icon
            >
              <ShoppingCart className="w-6 h-6" />
              {/* Cart count badge */}
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </Link>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 text-white ml-2"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-red-900/20">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsMenuOpen(false)}
                className={`block py-3 px-4 font-medium transition-colors hover:text-red-400 ${
                  isActive(item.path) ? 'text-red-500' : 'text-white'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <div className="px-4 py-3 border-t border-red-900/20 mt-2">
              <LanguageSwitcher />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
