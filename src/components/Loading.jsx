import styles from "../style";
import { motion } from "framer-motion";
import { jyotirLogo } from "../assets"; // ✅ import your new logo

const Loading = () => {
  return (
    <motion.div
      id="loading"
      className={`w-[100vw] h-[100vh] flex ${styles.flexCenter}`} // ✅ fixed stray quotes
      initial={{ scale: 1.0, opacity: 0.25 }}
      animate={{ scale: 2.2, opacity: 0.75 }}
      exit={{ opacity: 0, transition: { duration: 0.25 } }}
      transition={{
        duration: 0.5,
        ease: "easeInOut",
      }}
    >
      <img 
        src={jyotirLogo}  // ✅ replaced with your logo
        alt="Jyotir Logo" 
        className="w-[80px] h-[80px]" 
      />
    </motion.div>
  );
};

export default Loading;