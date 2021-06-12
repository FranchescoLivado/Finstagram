import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import * as ROUTES from './constants/routes';

const Login = lazy(() => import('./pages/login'));
const SignUp = lazy(() => import('./pages/signup'));
function App() {
  return (
    <Router>
      <AnimatePresence exitBeforeEnter>
        <Switch>
          <Suspense fallback={<p>Loading ... </p>}>
            <Route path={ROUTES.LOGIN} component={Login} />
            <Route exact path={ROUTES.DASHBOARD} component={Login} />
            <Route path={ROUTES.SIGN_UP} component={SignUp} />
          </Suspense>
        </Switch>
      </AnimatePresence>
    </Router>
  );
}

export default App;
