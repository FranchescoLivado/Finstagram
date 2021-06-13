import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import * as ROUTES from './constants/routes';
import Navbar from './components/nav-bar/navbar';
import Login from './pages/login';
import Dashboard from './pages/dashboard';
import Signup from './pages/signup';

// const Login = lazy(() => import('./pages/login'));
// const Signup = lazy(() => import('./pages/signup'));
// const Dashboard = lazy(() => import('./pages/dashboard'));

function App() {
  return (
    <Router>
      <AnimatePresence>
        <Switch>
          <Suspense fallback={<div>Loading...</div>}>
            <Navbar />
            <Route path={ROUTES.LOGIN} component={Login} />
            <Route exact path={ROUTES.DASHBOARD} component={Dashboard} />
            <Route path={ROUTES.SIGN_UP} component={Signup} />
          </Suspense>
        </Switch>
      </AnimatePresence>
    </Router>
  );
}

export default App;
