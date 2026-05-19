import { motion } from 'framer-motion';

const ScrollReveal = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }} // Starts 50px lower and invisible
      whileInView={{ opacity: 1, y: 0 }} // Animates to its natural position
      viewport={{ once: true, margin: "-100px" }} // Animates ONLY the first time it's seen
      transition={{ duration: 0.6, ease: "easeOut" }} // Smooth easing
    >
      {children}
    </motion.div>
  );
};

export default ScrollReveal;