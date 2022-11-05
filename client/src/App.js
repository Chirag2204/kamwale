import './App.css';
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/layout/Navbar'
import Landing from './components/layout/Landing'
import Routes from './components/routing/Routes'
import {Provider} from 'react-redux';
import store from './store'
import {loadUser} from './actions/auth'
import setAuthToken from './utils/setAuthToken';

if(localStorage.token){
  setAuthToken(localStorage.token)
}
const App =() =>{

  useEffect(()=>{
    store.dispatch(loadUser())
  }, [])
  
  return (
    <Provider store={store}>
      <Router>
        <div className='outer-container'>
          <Navbar />
          <Switch>
            <Route exact path='/' component={Landing} />
            <Route component={Routes}/>
          </Switch>
        </div>
      </Router>
    </Provider>
  );

  
}

export default App;
