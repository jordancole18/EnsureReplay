import React from "react";
import { Button } from "semantic-ui-react";
import { Navbar } from "../../components/navbar";
import colors from "../../utils/colors";
import "./index.css";

export const Main = () => {
  return (
    <div style={{ backgroundColor: colors.primary, height: "100vh" }}>
      <Navbar />
      <h1>I am App Component!!!</h1>
      <p>fda</p>
      <p>{colors.primary}</p>
      <Button>Test</Button>
      <Button>fdasjknfds</Button>
      <Button>YOO</Button>
    </div>
  );
};
