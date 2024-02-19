// components/FadeDownAnimation.js
import { motion } from 'framer-motion';

const FadeDownAnimation = () => {
  const variants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={variants}
      transition={{ duration:2 }}
    >
      <motion.img
        src="/pink-essence/img/prawed/prawed1.jpg"
        alt="Your Image"
        style={{ width: '100%', height: 'auto' }}
      />
      <div className="overlay">
        <h1>Fulana</h1>
        <h3>Putra Dari Bapaak Fulan</h3>
        <h3>Putri Dari Ibu Fulana</h3>
      </div>
    </motion.div>
  );
};

export default FadeDownAnimation;
