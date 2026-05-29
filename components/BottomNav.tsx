import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const BottomNav = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const getLinkClass = (path: string) => {
    const isActive = currentPath === path;
    return `flex flex-col items-center gap-1 ${isActive ? 'text-primary' : 'text-gray-400'}`;
  };

  return (
    <nav className="fixed bottom-0 max-w-md w-full bg-white/95 dark:bg-black/90 backdrop-blur-md border-t border-gray-200 dark:border-gray-800 px-8 py-3 pb-8 flex justify-between items-center z-50">
      <Link to="/" className={getLinkClass('/')}>
        <span className={`material-symbols-outlined text-[28px] ${currentPath === '/' ? 'fill-1' : ''}`}>home</span>
        <span className="text-[10px] font-bold uppercase mt-1 tracking-widest font-display">Home</span>
      </Link>
      <Link to="/menu" className={getLinkClass('/menu')}>
        <span className="material-symbols-outlined text-[28px]">restaurant_menu</span>
        <span className="text-[10px] font-bold uppercase mt-1 tracking-widest font-display">Menu</span>
      </Link>
      <Link to="/contact" className={getLinkClass('/contact')}>
        <span className="material-symbols-outlined text-[28px]">contact_support</span>
        <span className="text-[10px] font-bold uppercase mt-1 tracking-widest font-display">Contact</span>
      </Link>
    </nav>
  );
};

export default BottomNav;