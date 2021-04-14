import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import "./Nav.css";
import {
  useWindowDimensions,
  IsMobileWidth,
} from "../hooks/useWindowDimensions";
import ReactModal from "react-modal";

const Nav = () => {
  const [showMenu, setShowMenu] = useState(false);
  const { width } = useWindowDimensions();

  const getMobileMenu = () => {
    return IsMobileWidth() ? null : (
      <FontAwesomeIcon
        onClick={onClickToggle}
        icon={faBars}
        size="lg"
        className="nav-mobile-menu"
      />
      //  <div className="rightmenu">Right Menu</div>
    );
  };

  const onClickToggle = (e: React.MouseEvent<Element, MouseEvent>) => {
    setShowMenu(!showMenu);
  };

  const onRequestClose = (
    e: React.MouseEvent<Element, MouseEvent> | React.KeyboardEvent<Element>
  ) => {
    setShowMenu(false);
  };

  return (
    <React.Fragment>
      <ReactModal
        className="modal-menu"
        isOpen={showMenu}
        onRequestClose={onRequestClose}
        shouldCloseOnOverlayClick={true}
      ></ReactModal>
      <nav>
        {getMobileMenu()}
        <strong>SuperForum</strong>
      </nav>
    </React.Fragment>
  );
};

export default Nav;
