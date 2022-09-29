import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import { Main } from "../main/index";

export const Router = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </HashRouter>
  );
};
