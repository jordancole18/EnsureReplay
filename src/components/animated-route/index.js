import React from "react";
import { useLocation, Route, Routes } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { Main } from "../../screens/main";
import { Settings } from "../../screens/settings";
import { Navbar } from "../navbar";

export const AnimatedRoute = () => {
  const location = useLocation();

  return (
    <>
      <Navbar />

      <AnimatePresence>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Main />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </AnimatePresence>
    </>
  );
};
