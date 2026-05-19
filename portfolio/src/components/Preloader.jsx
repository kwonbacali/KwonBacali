// components/Preloader.jsx
import { motion } from 'framer-motion';

const Preloader = () => {
  return (
    <motion.div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 9999, // Sits on top of everything
      }}
      exit={{ opacity: 0, y: -20 }} // Smooth slide up/fade out when done
      transition={{ duration: 0.5 }}
    className='bg-gradient-to-b from-sky-500 to-blue-50 border-b border-slate-200'>
      <div className="flex flex-col items-center gap-4">
        {/* Simple CSS or Tailwind Spinner */}
        <div className="w-12 h-12 border-4 border-t-blue-500 border-gray-700 rounded-full animate-spin"></div>
        <p className="text-white font-medium tracking-widest text-sm uppercase animate-pulse">
          Loading...
        </p>
      </div>
    </motion.div>
  );
};

export default Preloader;