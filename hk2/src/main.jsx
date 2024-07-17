import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// components
import Hearder from "./components/Hearder/Hearder.jsx";
import Menu from "./components/Menu/Menu.jsx";
import Footer from "./components/footer/Footer.jsx";
import Chitiet from "./components/Data/Chitiet.jsx";
// pages
import App from "./App.jsx";
import Gioithieu from "./pages/gioithieu/Gioithieu.jsx";
import Mauxe from "./pages/cacmauxe/Mauxe.jsx";
import Phukiens from "./pages/phukien/Phukiens.jsx";
import Phu from "./pages/phutung/Phu.jsx";
import Dichvu from "./pages/dichvu/Dichvu.jsx";
import Tragop from "./pages/tragop/Tragop.jsx";
import Tintuc from "./pages/tintuc/Tintuc.jsx";
import Khuyenmain from "./pages/khuyenmai/Khuyenmain.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Hearder />
      <Menu />
      <Routes>
        {/* pages */}
        <Route path="/" element={<App />} />
        <Route path="/gioi-thieu" element={<Gioithieu />} />
        <Route path="/cac-mau-xe" element={<Mauxe />} />
        <Route path="/phu-kien" element={<Phukiens />} />
        <Route path="/phu-tung" element={<Phu />} />
        <Route path="/Dich-vu" element={<Dichvu />} />
        <Route path="/tra-gop" element={<Tragop />} />
        <Route path="/tin-tuc" element={<Tintuc />} />
        <Route path="/khuyen-mai" element={<Khuyenmain />} />
        {/* components */}
        <Route path="/chitiet/:id" element={<Chitiet/>} />


      </Routes>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
);
