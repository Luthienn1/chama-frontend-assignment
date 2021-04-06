import React from 'react';

import { Link } from 'react-router-dom';

import './styles.css';

function Header() {
  return(
    <div className="menu">
      <Link className="search" to='/'>Search</Link>
      <Link className="history" to='/history'>History</Link>
    </div>
  );
}

export default Header;