import React, { useState } from "react";
import { AppState } from "../../store/AppState";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faRegistered,
  faSignInAlt,
  faSignOutAlt,
} from "@fortawesome/free-solid-svg-icons";
//import Registration
import { IsMobileWidth } from "../../hooks/useWindowDimensions";

const SideBar = () => {
  const user = useSelector((state: AppState) => state.user);

  return IsMobileWidth() ? null : <div className="sidebar">Side Bar</div>;
};

export default SideBar;
