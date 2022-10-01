import React from "react";
import ReactPlayer from "react-player";
import colors from "../../utils/colors";
import SettingsIcon from "./assets/settings.svg";
import { useNavigate } from "react-router-dom";
import { AnimatedDiv } from "../../components/animated-div";
import { useNavbar } from "../../providers/NavbarProvider";
import "./index.css";

export const Main = () => {
  const navigate = useNavigate();
  const { setShowBackButton } = useNavbar();

  return (
    <AnimatedDiv>
      <div className="title" style={{ display: "flex", flexDirection: "row" }}>
        <h1 style={{ color: "white", margin: "24px" }}>Recent Clips</h1>
        <SettingsIcon
          className="icon"
          width="24px"
          height="24px"
          fill={colors.secondary}
          style={{
            alignSelf: "center",
            marginTop: "4px",
          }}
          onClick={() => {
            setShowBackButton(true);
            navigate("/settings");
          }}
        />
      </div>
      <div
        className="clip-container"
        style={{ margin: "24px", display: "flex", flexDirection: "row" }}
      >
        <div className="clip-card clip-padding">
          <ReactPlayer
            width="100%"
            height="100%"
            url="https://www.youtube.com/watch?v=C8_mbME0DJo"
          />
        </div>
        <div className="clip-card clip-padding">
          <ReactPlayer
            width="100%"
            height="100%"
            url="https://www.youtube.com/watch?v=C8_mbME0DJo"
          />
        </div>
        <div className="clip-card clip-padding">
          <ReactPlayer
            width="100%"
            height="100%"
            url="https://www.youtube.com/watch?v=C8_mbME0DJo"
          />
        </div>
        <div className="clip-card">
          <ReactPlayer
            width="100%"
            height="100%"
            url="https://www.youtube.com/watch?v=C8_mbME0DJo"
          />
        </div>
      </div>
    </AnimatedDiv>
  );
};
