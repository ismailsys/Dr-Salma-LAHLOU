import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import SpecialtyPage from "./SpecialtyPage";
import "./index.css";

const rootElement = document.getElementById("root");
if (!rootElement) throw new Error("Root element was not found.");
createRoot(rootElement).render(<StrictMode><SpecialtyPage /></StrictMode>);
