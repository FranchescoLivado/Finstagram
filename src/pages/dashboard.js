import React from 'react';
import { Link } from 'react-router-dom';
import * as ROUTES from '../constants/routes';
import CreateAcc from '../components/dashboard-btns/createAcc';
import LoginAcc from '../components/dashboard-btns/loginAcc';

export default function Dashboard() {
  return (
    <div className="container flex mx-auto max-w-screem-md items-center h-screen">
      <div className="flex">
        <img src="/images/Fox_-_Super_Smash_Bros 1.png" alt="melee character" />
      </div>
      <div className="text-center">
        <h1 className="text-white font-bold text-7xl">Connect To Your Competition</h1>
        <h2 className="text-white font-bold text-4xl">
          using the new netplay
          <img className="inline pl-4" src="/images/SlippiLogo.svg" alt="Slippi Logo" />
        </h2>

        <div>
          <p className="text-white">Dont have an account?</p>
          <Link to={ROUTES.SIGN_UP} className="text-white">
            <CreateAcc />
          </Link>
        </div>

        <div>
          <Link to={ROUTES.LOGIN} className="text-white">
            <LoginAcc />
          </Link>
        </div>
      </div>
    </div>
  );
}
