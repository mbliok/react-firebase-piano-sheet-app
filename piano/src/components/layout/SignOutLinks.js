import React from 'react';
import { NavLink } from 'react-router-dom';

const SignOutLinks = () => (
  <nav>
    <ul>
      <li>
        <NavLink to="/signup">Sign up</NavLink>
      </li>
      <li>
        <NavLink to="/signin">Log in</NavLink>
      </li>
    </ul>
  </nav>
);

export default SignOutLinks;
