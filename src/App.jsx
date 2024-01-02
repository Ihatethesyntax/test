import React from "react";
import { Route, Routes, BrowserRouter, Navigate } from "react-router-dom";

import GlobalStyle from "./styles/GlobalStyles";
import AppLayout from "./pages/AppLayout";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import AppDesign from "./pages/AppDesign";
import WebDesign from "./pages/WebDesign";
import GraphicDesign from "./pages/GraphicDesign";
import Location from "./pages/Location";

function App() {
  return (
    <React.Fragment>
      <h1>Test</h1>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<Navigate replace to="home" />} />
            <Route path="home" element={<Home />} />
            <Route path="contact" element={<Contact />} />
            <Route path="location" element={<Location />} />
            <Route path="about" element={<About />} />
            <Route path="appdesign" element={<AppDesign />} />
            <Route path="webdesign" element={<WebDesign />} />
            <Route path="graphicdesign" element={<GraphicDesign />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
