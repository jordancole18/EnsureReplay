import React from "react";
import { motion } from "framer-motion";
import { Navbar } from "../navbar";
import colors from "../../utils/colors";

export const AnimatedDiv = ({ children, showBackButton }) => {
  return (
    <>
      <motion.div
        style={{ backgroundColor: colors.primary, height: "100vh" }}
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        exit={{
          x: showBackButton ? -window.innerWidth : window.innerWidth,
          transition: { duration: 0.2 },
        }}
      >
        {children}
      </motion.div>
    </>
  );
};
