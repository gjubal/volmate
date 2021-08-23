import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

import Profile from '../pages/Profile';
import Dashboard from '../pages/Dashboard';
import VolunteerList from '../pages/VolunteerList';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/signup" component={SignUp} />

      <Route path="/profile" isPrivate component={Profile} />
      <Route path="/dashboard" isPrivate exact component={Dashboard} />
      <Route path="/dashboard/volunteers" isPrivate component={VolunteerList} />
    </Switch>
  );
};

export default Routes;
