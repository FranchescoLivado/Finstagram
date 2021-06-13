import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';

export default function Navbar() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <div className="nav">
      <img src="/images/SmashBall 2.svg" alt="smash ball logo" />
      <div className="w-1/6  my-auto">
        <ul className="flex justify-evenly">
          <li className="text-white">
            <Link to={loggedIn ? ROUTES.HOME : ROUTES.DASHBOARD}>Home</Link>
          </li>
          {loggedIn && (
            <li className="text-white">
              <Link>Profile</Link>
            </li>
          )}
          <li className="text-white">
            <Link to={loggedIn ? ROUTES.DASHBOARD : ROUTES.LOGIN}>
              {loggedIn ? 'Logout' : 'Login'}
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
