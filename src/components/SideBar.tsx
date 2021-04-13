import React from "react";
import { IsMobileWidth } from "../hooks/useWindowDimensions";

const SideBar = () => {
  return IsMobileWidth() ? null : <div className="sidebar">Side Bar</div>;
};

export default SideBar;
