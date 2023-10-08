import { useState } from "react";
import MenuBar2 from "../../Styles/MenuBar.css";
import { Link } from "react-router-dom";
import Milaya_logo from "../../Assets/images/Milaya_logo.png";

const MenuBar = () => {
  const [isNavActive, setIsNavActive] = useState(false);

  const toggleNav = () => {
    setIsNavActive(!isNavActive);
  };

  const handleMenuItemClick = () => {
    setIsNavActive(false);
  };

  return (
    <>
      <div>
        <div className="header-container">
          <header>
            <div className="logo">
              <Link to="/">
                <img src={Milaya_logo} alt="Milaya logo image" />
              </Link>
            </div>
            <nav className={`menu ${isNavActive ? "active" : ""}`}>
              <ul>
                <li>
                  <Link to="/" className="active" onClick={handleMenuItemClick}>
                    PROCUREMENT
                  </Link>
                </li>

                <li>
                  <Link
                    to="/global-reach"
                    className="active"
                    onClick={handleMenuItemClick}
                  >
                    GLOBAL REACH
                  </Link>
                </li>

                <li>
                  <Link
                    to="/supply-chain"
                    className="active"
                    onClick={handleMenuItemClick}
                  >
                    Supply Chain
                  </Link>
                </li>

                <li>
                  <Link
                    to="/ecobuy"
                    className="active"
                    onClick={handleMenuItemClick}
                  >
                    ECOBUY
                  </Link>
                </li>

                <li>
                  <Link
                    to="/about-us"
                    className="active"
                    onClick={handleMenuItemClick}
                  >
                    ABOUT US
                  </Link>
                </li>

                <li>
                  <Link to="/contact-us" onClick={handleMenuItemClick}>
                    CONTACT US
                  </Link>
                </li>
              </ul>
            </nav>
            <div className="menu-toggle" onClick={toggleNav}>
              <i
                className="fa fa-bars"
                aria-hidden="true"
                style={{ color: "#008ba6" }}
              ></i>
            </div>
          </header>
        </div>
      </div>
    </>
  );
};

export default MenuBar;
