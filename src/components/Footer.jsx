import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

import { GrRestaurant } from "react-icons/gr";
import { SiYoutube } from "react-icons/si";
import { FaFacebookSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-wrapper">
        <div className="social-media">
          <div className="footer-logo-container">
            <div>
              <HashLink smooth to="/#top" className="logo-icon-link">
                <GrRestaurant className="footer-logo-icon" alt="logo" />
              </HashLink>
            </div>

            <div>
              <HashLink smooth to="/#top" className="footer-logo-link">
                Artesania Cafe
              </HashLink>
            </div>
          </div>

          <ul className="social-icons">
            <li>
              <Link to="#" className="social-link">
                <SiYoutube className="social-icon" />
              </Link>
            </li>

            <li>
              <Link to="#" className="social-link">
                <FaFacebookSquare className="social-icon" />
              </Link>
            </li>

            <li>
              <Link to="#" className="social-link">
                <FaXTwitter className="social-icon" />
              </Link>
            </li>

            <li>
              <FaInstagram className="social-icon" />
            </li>
          </ul>

          <p className="copyright">
            &copy; <span className="year"></span> Art Design Method.
          </p>
        </div>

        <div className="contact">
          <p className="footer-subhead">Contact us</p>
          <address className="contacts">
            <p className="address-line-1">1234 Street Name</p>
            <p className="address-line-2">City, State, 00000</p>

            <div className="footer-nav">
              <Link to="tel:###-123-###" className="footer-link">
                ###-123-###
              </Link>

              <Link to="#" className="footer-link">
                email@example.com
              </Link>
            </div>
          </address>
        </div>

        <nav className="footer-col">
          <p className="footer-subhead">Overview</p>
          <ul className="footer-nav">
            <li>
              <HashLink smooth to="/#about" className="footer-link">
                About us
              </HashLink>
            </li>

            <li>
              <HashLink smooth to="/#gallery" className="footer-link">
                Gallery
              </HashLink>
            </li>

            <li>
              <Link
                className="footer-link"
                to="https://react-icons.github.io/react-icons/"
              >
                Icon credit: React Icons
              </Link>
            </li>
          </ul>
        </nav>

        <nav className="footer-col">
          <p className="footer-subhead">Bookings</p>

          <ul className="footer-nav">
            <li>
              <HashLink smooth to="#hours" className="footer-link">
                Book table
              </HashLink>
            </li>

            <li>
              <HashLink smooth to="#general-form" className="footer-link">
                Contact
              </HashLink>
            </li>

            <li>
              <Link className="footer-link" to="https://unsplash.com/">
                Images: Unsplash
              </Link>
            </li>

            <li>
              <Link className="footer-link" to="https://leonardo.ai/">
                Illustration created <br />
                with Leonardo.ai
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
