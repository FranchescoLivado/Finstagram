import { useState, useContext, useEffect } from 'react';
import { useHistory } from 'react-router';
import FirebaseContext from '../context/firebase';

export default function Login() {
  const history = useHistory();
  const { firebase } = useContext(FirebaseContext);

  const [emailAddress, setEmailAddress] = useState('');
  const [password, setPassword] = useState('');

  const [error, setError] = useState('');
  const isInvalid = password === '' || emailAddress === '';

  const handleLogin = () => {};

  useEffect(() => {
    document.title = 'Login - Finstagram';
  }, []);

  return <div className="container flex mx-auto max-w-screem-md items-center h-screen">Login</div>;
}
