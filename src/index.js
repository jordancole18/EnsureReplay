import React from "react";
import { createRoot } from "react-dom/client";

import "semantic-ui-css/semantic.min.css";
import { Router } from "./screens/router";

import "./index.css";
import { NavbarProvider } from "./providers/NavbarProvider";

createRoot(document.getElementById("root")).render(
  <NavbarProvider>
    <Router />
  </NavbarProvider>
);
