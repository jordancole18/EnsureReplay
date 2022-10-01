import React from "react";
import colors from "../../utils/colors";
import "./index.css";
import Bars from "./assets/bars.svg";
import Close from "./assets/close.svg";
import Minimize from "./assets/minimize.svg";
import Back from "./assets/back.svg";
import { useNavigate } from "react-router-dom";
import { useNavbar } from "../../providers/NavbarProvider";
import { AnimatePresence, motion } from "framer-motion";

export const Navbar = () => {
  const navigate = useNavigate();
  const { showBackButton, setShowBackButton } = useNavbar();

  return (
    <div
      className="navbar"
      style={{
        backgroundColor: colors.secondary,
        width: "100%",
        height: "48px",
        display: "flex",
      }}
    >
      <AnimatePresence>
        {showBackButton ? (
          <motion.div
            key="back"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            style={{ alignSelf: "center" }}
          >
            <Back
              className="item"
              width="34px"
              height="34px"
              style={{
                marginLeft: "8px",
                marginRight: "6px",
              }}
              onClick={() => {
                setShowBackButton(false);
                navigate("/");
              }}
            />
          </motion.div>
        ) : (
          <motion.div
            key="bars"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
          >
            <Bars
              className="item"
              width="24px"
              height="24px"
              style={{ margin: "12px" }}
            />
          </motion.div>
        )}
      </AnimatePresence>
      <h1 style={{ color: colors.primary, margin: "auto" }}>Ensure Replay</h1>
      <Minimize
        className="item"
        width="24px"
        style={{ float: "right", margin: "12px" }}
        onClick={async () => {
          // electron.titleApi.minimizeApp();
          const testData = await electron.titleApi.test();
          console.log(testData);
        }}
      />
      <Close
        className="item"
        width="24px"
        style={{ margin: "12px", float: "right" }}
        onClick={() => {
          electron.titleApi.closeApp();
        }}
      />
    </div>
  );
};
