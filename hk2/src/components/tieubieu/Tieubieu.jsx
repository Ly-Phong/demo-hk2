import React from "react";
import "./style.css";
import Tieude from "./Tieude";
import Xetieubieu from "./Xetieubieu";

const Tieubieu = () => {
  return (
    <div className="tieu">
      <Tieude />
      <Xetieubieu />
    </div>
  );
};

export default Tieubieu;
