import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import { Login } from '../pages/Login';
import { Register } from '../pages/Register';
import { Todos } from '../pages/Todos';

export const AppRouter = () => (
  <Router>
    <Redirect from="*" to="/register" />
    <Route path="/login" exact component={Login} />
    <Route path="/register" exact component={Register} />
    <Route path="/" exact component={Todos} />
  </Router>
);
