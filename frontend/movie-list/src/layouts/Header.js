import React from 'react';
import { Link } from 'react-router-dom';
import { headerStyles } from '../styles';

const Header = () => {
  return (
    <header css={headerStyles}>
      <nav className='nav'>
        <Link to='/' className='logo'>
          Movie List
        </Link>
        <ul className='nav-list'>
          <li className='nav-item'>
            <Link to='/' className='nav-link'>
              Home
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/login' className='nav-link'>
              Login
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/dashboard' className='nav-link'>
              Dashboard
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
