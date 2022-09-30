import React from "react";
import { createRoot } from "react-dom/client";

import "semantic-ui-css/semantic.min.css";
import { Router } from "./screens/router";

createRoot(document.getElementById("root")).render(<Router />);
