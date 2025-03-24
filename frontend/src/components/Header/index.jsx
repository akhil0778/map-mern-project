import { Link, useNavigate } from "react-router-dom";
import { LuLogOut } from "react-icons/lu";
import { FaHome } from "react-icons/fa";
import { MdOutlineTravelExplore } from "react-icons/md";

import Cookies from "js-cookie";
import "./index.css";

const Header = () => {
  const navigate = useNavigate();

  const onClickLogout = () => {
    Cookies.remove("jwt_token");
    navigate("/login");
  };

  return (
    <nav className="nav-header">
      <div className="nav-content">
        <div className="nav-bar-mobile-logo-container">
          <Link to="/">
            <img
              className="website-logo"
              src="assets/logo.png"
              alt="website logo"
            />
          </Link>

          <button type="button" className="nav-mobile-btn" onClick={onClickLogout}>
          <LuLogOut className="nav-bar-image"/>
          </button>
        </div>

        <div className="nav-bar-large-container">
          <Link to="/">
            <img
              className="website-logo"
              src="assets/logo.png"
              alt="website logo"
            />
          </Link>
          <ul className="nav-menu">
            <li className="nav-menu-item">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-menu-item">
              <Link to="/map" className="nav-link">
                View map
              </Link>
            </li>
          </ul>
          <button type="button" className="logout-desktop-btn" onClick={onClickLogout}>
            Logout
          </button>
        </div>
      </div>
      <div className="nav-menu-mobile">
        <ul className="nav-menu-list-mobile">
          <li className="nav-menu-item-mobile">
            <Link to="/" className="nav-link">
            <FaHome className="nav-bar-image"/>
            </Link>
          </li>
          <li className="nav-menu-item-mobile">
            <Link to="/map" className="nav-link">
            <MdOutlineTravelExplore className="nav-bar-image" />
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
