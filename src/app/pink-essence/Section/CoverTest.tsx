import React, { useState } from "react";
import { motion } from "framer-motion";
import CoverView from "./Cover/CoverView";
interface CoverTestInterface {
  isVisible: boolean;
  onCoverClick: () => void;
}

export const CoverTestView = (props: CoverTestInterface) => {
  const handleCoverClick = () => {
    props.onCoverClick();
  };

  return (
    <motion.div className="takda"
      initial={{ opacity: 1 }}
      animate={{ opacity: props.isVisible ? 1 : 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1, delay: props.isVisible ? 0 : 1 }}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "red", // Adjust background color
        zIndex: 999,
      }}
      onClick={handleCoverClick}
    >
      {/* Your content for the cover page */}
      <h1>Cover Page Content</h1>
    </motion.div>
  );
};
