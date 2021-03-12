import './App.css';
import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/utility/Navbar'
import Landing from './components/utility/Landing'
import Register from './components/auth/Register'
import Login from './components/auth/Login'

function App() {
  return (
    <Router>
      <Fragment>
        <Navbar />
        <Route exact path='/' component={Landing} />
        <section className="container">
        <Switch>
        <Route exact path="/register" component={Register}/>
        <Route exact path="/login" component={Login}/>
        </Switch>
        </section>
      </Fragment>
    </Router>
  );
}

export default App;
