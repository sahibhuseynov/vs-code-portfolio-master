import React, { useState } from "react";
import "./BottomBar.scss";
import windowsIcon from "../../../assets/windows/windows-10-white-icon-10.jpg";
import vsCodeIcon from "../../../assets/vscode_icon.svg";
import { Link } from 'react-router-dom';

const BottomBar = () => {
  const [isStartMenuOpen, setIsStartMenuOpen] = useState(false);

  const toggleStartMenu = () => {
    setIsStartMenuOpen(!isStartMenuOpen);
  };

  return (
    <div className="bottom__bar">
      <div className="bottom__bar__left">
        <div className="windows__icon" onClick={toggleStartMenu}>
          <img src={windowsIcon} alt="windows icon" />
        </div>
        <div className="search__bar">
          <input type="text" placeholder="Type here to search" />
        </div>
        <div className="icons__bar">
          <Link to="/">
              <span>
                <img src={vsCodeIcon} alt="VS Code Icon" />
              </span>
          </Link>
        </div>
      </div>

      {isStartMenuOpen && (
        <div className="start__menu">
          <div className="start__menu__left">
            <ul>
              <li>
                <img src={vsCodeIcon} alt="App" />
                <span>Visual Studio Code</span>
              </li>
              <li>
                <img src={vsCodeIcon} alt="App" />
                <span>Settings</span>
              </li>
              <li>
                <img src={vsCodeIcon} alt="App" />
                <span>File Explorer</span>
              </li>
            </ul>
          </div>
          <div className="start__menu__right">
            <div className="tile">Edge</div>
            <div className="tile">Store</div>
            <div className="tile">Photos</div>
            <div className="tile">Calendar</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BottomBar;
