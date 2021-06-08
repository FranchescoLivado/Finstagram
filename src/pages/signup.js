import { useState, useContext, useEffect } from 'react';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import FirebaseContext from '../context/firebase';
import * as ROUTES from '../constants/routes';
import { doesUsernameExist, doesEmailExist } from '../services/firebase';

export default function SignUp() {
  const history = useHistory();
  const { firebase } = useContext(FirebaseContext);

  const [emailAddress, setEmailAddress] = useState('');
  const [password, setPassword] = useState('');
  const [netplayTag, setNetplayTag] = useState('');
  const [username, setUsername] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');

  const [error, setError] = useState('');
  const isInvalid = password === '' || emailAddress === '';

  const handleSignup = async (event) => {
    event.preventDefault();

    const usernameExists = await doesUsernameExist(username);
    const emailExists = await doesEmailExist(emailAddress);

    if (!usernameExists && !emailExists) {
      // do authentication checks here (before account creation)
      if (password === passwordConfirm) {
        try {
          const createUserResult = await firebase
            .auth()
            .createUserWithEmailAndPassword(emailAddress, password);

          await createUserResult.user.updateProfile({
            displayName: username
          });

          await firebase.firestore().collection('users').add({
            userId: createUserResult.user.uid,
            username,
            emailAddress: emailAddress.toLocaleLowerCase(),
            friends: [],
            dateCreated: Date.now()
          });

          history.push(ROUTES.HOME);
        } catch (error) {
          setEmailAddress('');
          setPassword('');
          setPasswordConfirm('');
          setUsername('');
          setNetplayTag('');
          setError(error.message);
        }
      } else {
        setError('passwords are not the same');
      }
    } else {
      if (usernameExists) {
        setUsername('');
        setError('That username is already taken, please try another.');
      }
      if (emailExists) {
        setEmailAddress('');
        setError('That email is already being used, please try another.');
      }
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
        <form onSubmit={handleSignup} method="POST">
          <input
            aria-label="Enter your email"
            type="text"
            placeholder="Email"
            className="text-sm text-gray-base"
            onChange={({ target }) => setEmailAddress(target.value)}
            value={emailAddress}
          />
          <input
            aria-label="Enter your password"
            type="password"
            placeholder="Password"
            className="text-sm text-gray-base"
            onChange={({ target }) => setPassword(target.value)}
            value={password}
          />
          <input
            aria-label="Confirm your password"
            type="password"
            placeholder="Confirm Password"
            className="text-sm text-gray-base"
            onChange={({ target }) => setPasswordConfirm(target.value)}
            value={passwordConfirm}
          />
          <input
            aria-label="Enter your Netplay Tag"
            type="text"
            placeholder="TEST#1234 (Netplay Tag)"
            className="text-sm text-gray-base"
            onChange={({ target }) => setNetplayTag(target.value)}
            value={netplayTag}
          />
          <input
            aria-label="Enter your Username"
            type="text"
            placeholder="Username"
            className="text-sm text-gray-base"
            onChange={({ target }) => setUsername(target.value)}
            value={username}
          />
          <button disabled={isInvalid} type="submit" className="bg-blue-500 text-white">
            Create Account
          </button>

          <div>
            <p className="text-white">Already have an account?</p>
            <Link to={ROUTES.SIGN_UP} className="text-white">
              Login
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
