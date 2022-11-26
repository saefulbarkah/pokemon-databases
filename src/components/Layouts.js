import React from "react";
import SideBar from "./SideBar";

const Layouts = ({ children }) => {
  return (
    <>
      <SideBar />
      <div className="main">{children}</div>
    </>
  );
};

export default Layouts;
