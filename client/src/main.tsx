import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

// Import FontAwesome CSS for icons
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
// Prevent auto-adding CSS
config.autoAddCss = false;

// Render the app
createRoot(document.getElementById("root")!).render(<App />);
