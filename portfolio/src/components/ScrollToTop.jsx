import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Instantly snap the window scroll boundary back to coordinates (0, 0) on path updates
    window.scrollTo(0, 0);
  }, [pathname]);

  return null; // This component doesn't render any HTML
};

export default ScrollToTop;