import React from 'react';
import { Link } from 'react-router-dom';
import SignedInLinks from './SignInLinks';
import SignOutLinks from './SignOutLinks';

const Navbar = () => (
  <nav className="navigation">
    <Link to="/" className="logo">
      logo
    </Link>
    <SignedInLinks />
    <SignOutLinks />
  </nav>
);

export default Navbar;
