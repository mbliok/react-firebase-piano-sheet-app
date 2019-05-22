import React from 'react';
import { NavLink } from 'react-router-dom';

const SignedInLinks = () => (
  <nav>
    <ul>
      <li>
        <NavLink to="/">New project</NavLink>
      </li>
      <li>
        <NavLink to="/">Log out</NavLink>
      </li>
      <li>
        <NavLink to="/">MB</NavLink>
      </li>
    </ul>
  </nav>
);

export default SignedInLinks;
