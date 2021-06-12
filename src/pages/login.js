import { useState, useContext, useEffect } from 'react';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
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

  // Custom variant
  // Our custom easing
  const easing = [0.6, -0.05, 0.01, 0.99];
  const exit = {
    exit: {
      opacity: 0
    }
  };

  return (
    <div className="container flex mx-auto max-w-screem-md items-center h-screen">
      <div className="flex w-2/5">
        <img src="/images/Fox_-_Super_Smash_Bros 1.png" alt="melee character" />
      </div>
      <motion.div animate={{ height: '55%' }} className="form-bg">
        {error && <p className="mb-4 text-xs text-white">{error}</p>}
        <motion.form
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          initial={{ opacity: 0 }}
          onSubmit={handleLogin}
          method="POST"
          className="w-full"
        >
          <input
            aria-label="Enter your email"
            type="text"
            placeholder="Email"
            className=" text-gray-base block w-4/6 btn"
            onChange={({ target }) => setEmailAddress(target.value)}
          />
          <input
            aria-label="Enter your password"
            type="password"
            placeholder="Password"
            className=" text-gray-base block w-4/6 btn"
            onChange={({ target }) => setPassword(target.value)}
          />
          <button disabled={isInvalid} type="submit" className="form-submit  btn">
            Login
          </button>

          <div>
            <p className="text-white">Don't have an account?</p>
            <Link to={ROUTES.SIGN_UP} className="text-white">
              Create an Account
            </Link>
          </div>
        </motion.form>
      </motion.div>
    </div>
  );
}
