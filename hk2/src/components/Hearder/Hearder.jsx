import React from "react";
import Logo from "./Logo";
import Inpu from "./Inpu";
import Menubar from "./Menubar";

const Hearder = () => {
  return (
    <div className="flex items-center justify-between p-4 text-black">
      <Logo />
      <div className="flex-grow flex justify-center">
        <Inpu />
      </div>
      <Menubar />
    </div>
  );
};

export default Hearder;
