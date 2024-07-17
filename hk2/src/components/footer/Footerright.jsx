import React from "react";
import { FacebookOutlined } from "@ant-design/icons";
import "./style.css";

const Footerright = () => {
  return (
    <div className="footerright">
      <p>
        <h1>LIÊN KẾT MẠNG XÃ HỘI</h1>
      </p>
      <a
        href="https://www.facebook.com/MaxmotoVietNam/?ref=embed_page"
        target="_blank"
        rel="noopener noreferrer"
        className="fb-icon"
      >
        <FacebookOutlined style={{ fontSize: "36px", color: "#4267B2" }} />
      </a>
    </div>
  );
};

export default Footerright;
