import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Chatbot from "./components/chatbot/chatbot.component.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter basename="/ai-euklydia">
      <HelmetProvider>
        <Chatbot />
        <App />
      </HelmetProvider>
    </BrowserRouter>
  </StrictMode>
);
