import React from "react";
import { Button } from "semantic-ui-react";
import "./index.css";

export const Main = () => {
  return (
    <>
      <h1>I am App Component!!!</h1>
      <p>fda</p>
      <p>fdsa</p>
      <Button>Test</Button>
      <Button>fdasjknfds</Button>
      <Button>YOO</Button>
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
