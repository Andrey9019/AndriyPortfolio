import React from "react";
import ReactDOM from "react-dom/client";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import ScrollToTop from "./ui/ScrollToTop";
import { AboutPage } from "./page/AboutPage";
import { ProjectsPage } from "./page/ProjectsPage";
import { ContactsPage } from "./page/ContactsPage";
import "./index.css";

import "./i18n";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <div className="flex flex-col min-h-screen">
        <ScrollToTop />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<AboutPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/contacts" element={<ContactsPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  </React.StrictMode>
);
