import { useState, useContext, useEffect } from 'react';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import FirebaseContext from '../context/firebase';
import * as ROUTES from '../constants/routes';

export default function Login() {
  const history = useHistory();
  const { firebase } = useContext(FirebaseContext);

  const [emailAddress, setEmailAddress] = useState('');
  const [password, setPassword] = useState('');

  const [error, setError] = useState('');
  const isInvalid = password === '' || emailAddress === '';

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      await firebase.auth().signInWithEmailAndPassword(emailAddress, password);
      history.push(ROUTES.DASHBOARD);
    } catch (error) {
      setEmailAddress('');
      setPassword('');
      setError(error.message);
    }
  };

  useEffect(() => {
    document.title = 'Login - Finstagram';
  }, []);

  return (
    <div className="container flex mx-auto max-w-screem-md items-center h-screen">
      <div className="flex w-3/5">
        <img src="/images/Fox_-_Super_Smash_Bros 1.png" alt="melee character" />
      </div>
      <div className="flex flex-col w-2/5">
        {error && <p className="mb-4 text-xs text-white">{error}</p>}
        <form onSubmit={handleLogin} method="POST">
          <input
            aria-label="Enter your email"
            type="text"
            placeholder="Email"
            className="text-sm text-gray-base"
            onChange={({ target }) => setEmailAddress(target.value)}
          />
          <input
            aria-label="Enter your password"
            type="password"
            placeholder="Password"
            className="text-sm text-gray-base"
            onChange={({ target }) => setPassword(target.value)}
          />
          <button disabled={isInvalid} type="submit" className="bg-blue-500 text-white">
            Login
          </button>

          <div>
            <p className="text-white">Don't have an account?</p>
            <Link to={ROUTES.SIGN_UP} className="text-white">
              Create an Account
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
