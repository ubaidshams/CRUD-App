import { createRoot } from "react-dom/client";
import App from "./App";

import "bootstrap/dist/css/bootstrap.css";
import "jquery/dist/jquery";
import "popper.js/dist/popper";
import "bootstrap/dist/js/bootstrap";
// import "./global.css";

const root = document.getElementById("root");
createRoot(root).render(<App />);
