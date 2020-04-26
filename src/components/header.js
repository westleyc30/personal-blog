import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'gatsby';
import {
  FaTwitter,
  FaCodepen,
  FaLinkedin,
  FaGithub,
  FaBehance,
  FaInstagram,
} from 'react-icons/fa';

const Header = ({ siteTitle }) => (
  <header className="header">
    <div className="header__text-box">
      <h1 className="heading-primary">
        <Link className="heading-primary--main" to="/">
          Westley Cho
        </Link>
        <span className="heading-primary--sub">web developer / designer</span>
      </h1>
    </div>
    <nav className="header__nav-box nav-box">
      <Link className="nav-box--link" to="/blog/">
        blog
      </Link>
      <Link className="nav-box--link" to="/projects/">
        projects
      </Link>
    </nav>
    <div className="header__socials">
      <a className="header__socials-icon" href="https://github.com/westleyc30">
        <FaGithub />
      </a>
      <a
        className="header__socials-icon"
        href="https://www.linkedin.com/in/westley-cho-7a097073/"
      >
        <FaLinkedin />
      </a>
      <a className="header__socials-icon" href="https://codepen.io/westleyc30/">
        <FaCodepen />
      </a>
      <a className="header__socials-icon" href="https://codepen.io/westleyc30/">
        <FaBehance />
      </a>
      <a
        className="header__socials-icon"
        href="https://twitter.com/sometimes_codes"
      >
        <FaTwitter />
      </a>
      <a
        className="header__socials-icon"
        href="https://www.instagram.com/westleyc30/"
      >
        <FaInstagram />
      </a>
    </div>
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
