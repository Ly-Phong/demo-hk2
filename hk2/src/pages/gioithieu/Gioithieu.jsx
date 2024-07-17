import React from "react";
import Imggioi from "../../components/gioithieu/Imggioi";
import Thep from "../../components/gioithieu/Thep";
import Imginfo from "../../components/gioithieu/Imginfo";
import Video from "../../components/gioithieu/Video";
import Videop from "../../components/gioithieu/Videop";
import Footergt from "../../components/gioithieu/Footergt";

const gioithieu = () => {
  return (
    <div className="main">
      <Imggioi />
      <Thep />
      <Imginfo />
      <div className="flex">
        <Video />
        <Videop />
        <Footergt />
      </div>
      <br />
    </div>
  );
};

export default gioithieu;
