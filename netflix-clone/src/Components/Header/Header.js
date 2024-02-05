import React from "react";
import "./header.css";
import Netflixlogo from "../../assets/images/Netflixlogo.png";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
const Header = () => {
  return (
    <div>
      <div className="header_outer_container">
        <div className="header_container">
          <div className="header_left">
            <ul className="list">
              <li>
                <img src={Netflixlogo} alt="Netflix logo" width="100" />
              </li>

              <li>Home</li>
              <li>Tv Shows</li>
              <li>Movies</li>
              <li>Latest</li>
              <li>My List</li>
              <li>Browse By Language</li>
            </ul>
          </div>
          <div className="header_right">
            <ul className="list">
              <li>
                <SearchIcon />
              </li>
              <li>
                <NotificationsNoneIcon />
              </li>
              <li>
                <AccountBoxIcon />
              </li>
              <li>
                <ArrowDropDownIcon />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
