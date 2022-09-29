import React from "react";
import "./index.scss";

export const Main = () => {
  return (
    <>
      <h1>I am App Component!!!</h1>
      <button
        onClick={() => {
          electron.notificationApi.sendNotification("My custom notification!");
        }}
      >
        Notify
      </button>
    </>
  );
};
