import React from 'react';
import { NavLink } from 'react-router-dom';

const SignOutLinks = () => (
  <nav>
    <ul>
      <li>
        <NavLink to="/">Sign up</NavLink>
      </li>
      <li>
        <NavLink to="/">Log in</NavLink>
      </li>
    </ul>
  </nav>
);

export default SignOutLinks;
