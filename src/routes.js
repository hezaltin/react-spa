import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import HomePage from './components/home/HomePage';
 import SignInPage from './components/signin/signinPage';
 import SignUpPage from './components/signup/signupPage';
// import ManageCoursePage from './components/course/ManageCoursePage';


export default (
  <Route path="/" component={App}>
  {/* <Route path="signin" component={SignInPage} /> */}
    <IndexRoute component={SignInPage} />
     <Route path="home" component={HomePage} />
    <Route path="signup" component={SignUpPage} />
   
  </Route>
);
