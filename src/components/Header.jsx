import React from 'react';
import './Header.css';
import { ReactComponent as Logo } from '../assets/app-icon.svg';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="header">
      <h2 className="title">
        <Logo className="logo" />
        Hriday
      </h2>
      <nav>
        <ul>
          <li>
            <Link to={'/'} className="cta">
              Get Started
            </Link>
          </li>
          <li>
            <Link to={'/instructions'}>How to?</Link>
          </li>
          <li>
            <Link to={'/story'}>Story</Link>
          </li>
          <li>
            <Link to={'/about'}>About</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
