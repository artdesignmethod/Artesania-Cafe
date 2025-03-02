import { useState } from "react";

import { GrRestaurant } from "react-icons/gr";
import { HiOutlineMenu } from "react-icons/hi";
import { IoClose } from "react-icons/io5";

import { NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Navigation = () => {
  const [mainNavClass, setMainNavClass] = useState("main-nav");

  const [mobileNavClass, setMobileNavClass] = useState("mobile-nav hidden");

  const [toggleNav, setToggleNav] = useState(false);

  function handleClick() {
    if (!toggleNav) {
      setMainNavClass("main-nav fixed");
      setMobileNavClass("mobile-nav openNav");
    } else {
      setMainNavClass("main-nav");
      setMobileNavClass("mobile-nav hidden");
    }

    setToggleNav(!toggleNav);
  }

  function closeNav() {
    setToggleNav(false);
    setMobileNavClass("mobile-nav closeNav");
    setMainNavClass("main-nav");
  }

  return (
    <div>
      <nav className={mainNavClass}>
        <div className="logo-container">
          <NavLink to="/">
            <GrRestaurant className="logo-icon" onClick={closeNav} />
          </NavLink>

          <NavLink to="/" className="logo-link">
            Artesania Cafe
          </NavLink>
        </div>

        <div>
          <ul className="main-nav-list">
            <li>
              <HashLink smooth to="/#top" className="nav-link">
                Home
              </HashLink>
            </li>

            <li>
              <HashLink smooth to="/#about" className="nav-link">
                About
              </HashLink>
            </li>

            <li>
              <HashLink smooth to="/#gallery" className="nav-link">
                Gallery
              </HashLink>
            </li>

            <li>
              <HashLink smooth to="#general-form" className="nav-link">
                Contact
              </HashLink>
            </li>
          </ul>
        </div>
      </nav>

      <button
        className="btn-mobile-nav"
        onClick={handleClick}
        role="button"
        aria-label="Click to open menu"
      >
        {!toggleNav && (
          <HiOutlineMenu className="icon-mobile-nav"></HiOutlineMenu>
        )}

        {toggleNav && <IoClose className="icon-close-mobile-nav"></IoClose>}
      </button>

      <div className={mobileNavClass}>
        <ul className="mobile-nav-list">
          <li>
            <HashLink
              smooth
              to="/#top"
              className="mobile-nav-link"
              onClick={closeNav}
            >
              Home
            </HashLink>
          </li>

          <li>
            <HashLink
              smooth
              to="/#gallery"
              className="mobile-nav-link"
              onClick={closeNav}
            >
              Gallery
            </HashLink>
          </li>

          <li>
            <HashLink
              smooth
              to="#general-form"
              className="mobile-nav-link"
              onClick={closeNav}
            >
              Contact
            </HashLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navigation;
