import React from 'react';
import { Link } from 'react-router-dom';
import * as ROUTES from '../constants/routes';
import CreateAcc from '../components/dashboard-btns/createAcc';
import LoginAcc from '../components/dashboard-btns/loginAcc';

export default function Dashboard() {
  return (
    <div className="content-container">
      <div className="flex w-2/5">
        <img src="/images/Fox_-_Super_Smash_Bros 1.png" alt="melee character" />
      </div>
      <div className="text-center w-1/2">
        <img
          className="inline mb-10"
          src="images/Connect to Your Competition.svg"
          alt="Connect to your competition"
        />

        <img className="inline mb-28" src="images/heading 2.svg" alt="with the new netplay" />
        <img
          className="inline mb-5"
          src="images/Dont have an account_.svg"
          alt="Dont have an account?"
        />

        <div className="mb-5">
          <Link to={ROUTES.SIGN_UP} className="text-white ">
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
