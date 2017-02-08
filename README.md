# @accounts/react

## Note

This package is under active development.

## Install

```
yarn add @accounts/react
yarn add @accounts/client
yarn add @accounts/rest-client
yarn add @accounts/react-material-ui
```

## Usage

This is a simple example with react-router.

```javascript
import AccountsClient from '@accounts/client';
import restClient from '@accounts/rest-client';
import { accountRoutes, withUser, Authenticated } from '@accounts/react';

// If you want the material-ui view
import '@accounts/react-material-ui';

// Setup client config and try to resume session to know if user is logged
(async () => {
  AccountsClient.config({
    server: 'http://localhost:3010',
    history: browserHistory,
    title: 'my-app-title',
    loginPath: '/login',
    signUpPath: '/signup',
    homePath: '/home',
    reduxLogger: createLogger(),
  }, restClient);

  await AccountsClient.resumeSession();
})();

// The withUser hoc pass a user prop to the component
const Home = withUser(({ user }) =>
  <div>
    Signed in user info
    <br />
    {Object.keys(user).map(key => <div key={key}>{key} : {user[key]} </div>)}
  </div>,
);

// Use the Authenticated component in the router will check if a user is logged and redirect to /login if not
render((
  <MuiThemeProvider>
    <Router history={browserHistory}>
      <Route path="/" component={Authenticated}>
        <IndexRoute component={Home} />
        <Route path="/home" component={Home} />
      </Route>
      {accountRoutes()}
    </Router>
  </MuiThemeProvider>
), document.getElementById('root'));
```
