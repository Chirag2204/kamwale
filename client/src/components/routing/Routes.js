import React from 'react';
import Register from '../auth/Register';
import Login from '../auth/Login';
import Alert from '../layout/Alert';
import NotFound from '../layout/NotFound';
import Decision from '../layout/Decision';
import CreateProfile from '../profile-forms/CreateProfile';
import EditProfile from '../profile-forms/EditProfile';
import AddEducation from '../profile-forms/AddEducation';
import Profiles from '../profiles/Profiles';
import Profile from '../profiles/Profile';
import Dashboard from '../dashboard/dashboard';
import PrivateRoute from '../routing/PrivateRoute';
import { Route, Switch } from 'react-router-dom';

const Routes = () => {
    return (
      <section className='container'>
        <Alert />
        <Switch>
          <Route exact path='/register' component={Register} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/decision' component={Decision} />
          <Route exact path='/profiles' component={Profiles} />
          <Route path='/search/:keyword' component={Profiles} />
          <Route exact path='/profile/:id' component={Profile} />
          <PrivateRoute exact path='/dashboard' component={Dashboard} />
          <PrivateRoute
            exact
            path='/create-profile'
            component={CreateProfile}
          />
          <PrivateRoute exact path='/edit-profile' component={EditProfile} />
          <PrivateRoute exact path='/add-education' component={AddEducation} />
          <Route component={NotFound} />
        </Switch>
      </section>
    );
}

export default Routes
