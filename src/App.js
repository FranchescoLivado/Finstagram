import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import * as ROUTES from './constants/routes';

const Login = lazy(() => import('./pages/login'));
const SignUp = lazy(() => import('./pages/signup'));
const Dashboard = lazy(() => import('./pages/dashboard'));
const NavBar = lazy(() => import('./components/nav-bar/navbar'));

function App() {
  return (
    <Router>
      <AnimatePresence exitBeforeEnter>
        <Switch>
          <Suspense fallback={<p>Loading ... </p>}>
            <NavBar />
            <Route path={ROUTES.LOGIN} component={Login} />
            <Route exact path={ROUTES.DASHBOARD} component={Dashboard} />
            <Route path={ROUTES.SIGN_UP} component={SignUp} />
          </Suspense>
        </Switch>
      </AnimatePresence>
    </Router>
  );
}

export default App;
