import React from "react";
import { IsMobileWidth } from "../hooks/useWindowDimensions";

const RightMenu = () => {
  return IsMobileWidth() ? null : <div className="rightmenu">Right Menu</div>;
};

export default RightMenu;
