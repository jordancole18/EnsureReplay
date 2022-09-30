import React from "react";
import { Button, Container, Grid, Icon } from "semantic-ui-react";
import colors from "../../utils/colors";
import "./index.css";
import Bars from "./assets/bars.svg";
import Close from "./assets/close.svg";
import Maximize from "./assets/maximize.svg";
import Minimize from "./assets/minimize.svg";

export const Navbar = () => {
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
      <img
        className="item"
        src={Bars}
        style={{ width: 24, height: 24, margin: "12px" }}
      />
      <h1 style={{ color: colors.primary, margin: "auto" }}>Ensure Replay</h1>
      <img
        className="item"
        src={Minimize}
        style={{ width: 24, height: 24, margin: "12px", float: "right" }}
        onClick={() => {
          electron.titleApi.minimizeApp();
        }}
      />
      <img
        className="item"
        src={Maximize}
        style={{ width: 24, height: 24, margin: "12px", float: "right" }}
        onClick={() => {
          electron.titleApi.maximizeApp();
        }}
      />
      <img
        className="item"
        src={Close}
        style={{ width: 24, height: 24, margin: "12px", float: "right" }}
        onClick={() => {
          electron.titleApi.closeApp();
        }}
      />
    </div>
  );
};
