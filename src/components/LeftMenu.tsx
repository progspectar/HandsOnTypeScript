import React from "react";
import { IsMobileWidth } from "../hooks/useWindowDimensions";

const LeftMenu = () => {
  return IsMobileWidth() ? null : <div className="leftmenu">Left Menu</div>;
};

export default LeftMenu;
