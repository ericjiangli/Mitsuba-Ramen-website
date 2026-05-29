import React, { useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import Home from './components/Home';
import Menu from './components/Menu';
import Contact from './components/Contact';
import About from './components/About';
import BottomNav from './components/BottomNav';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const AppContent = () => {
  const location = useLocation();
  const showBottomNav = ['/', '/menu'].includes(location.pathname);

  return (
    <div className="bg-gray-100 min-h-screen flex justify-center">
      <div className="w-full max-w-md bg-background-light dark:bg-brand-dark min-h-screen relative shadow-2xl overflow-hidden">
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/cart" element={<Navigate to="/menu" replace />} />
          <Route path="/checkout" element={<Navigate to="/menu" replace />} />
        </Routes>
        {showBottomNav && <BottomNav />}
      </div>
    </div>
  );
};

export default function App() {
  return (
    <HashRouter>
      <AppContent />
    </HashRouter>
  );
}