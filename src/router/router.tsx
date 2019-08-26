import React, { FC } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  NavLink
} from 'react-router-dom';
import { Login } from '../pages/Login/login';
import { Register } from '../pages/Register/register';
import { Todos } from '../pages/Todos/todos';
import { Toolbar, AppBar, Typography, Button } from '@material-ui/core';
import { makeStyles, createStyles } from '@material-ui/styles';

const useStyles = makeStyles(() =>
  createStyles({
    toolbar: {
      display: 'flex',
      justifyContent: 'space-between'
    },
    navLink: {
      textDecoration: 'none',
      color: '#fff'
    }
  })
);

export const AppRouter = () => {
  const styles = useStyles();

  const RenderButtons: FC = () => {
    const { pathname } = window.location;

    switch (pathname) {
      case '/login':
        return (
          <Button color="inherit">
            <NavLink className={styles.navLink} to="/register">
              Register
            </NavLink>
          </Button>
        );

      case '/register':
        return (
          <Button color="inherit">
            <NavLink className={styles.navLink} to="/login">
              Login
            </NavLink>
          </Button>
        );

      default:
        return (
          <Button color="inherit">
            <NavLink className={styles.navLink} to="/login">
              Login
            </NavLink>
          </Button>
        );
    }
  };

  return (
    <Router>
      <AppBar position="static">
        <Toolbar className={styles.toolbar}>
          <Typography variant="h6">Todolist</Typography>
          <RenderButtons />
        </Toolbar>
      </AppBar>
      <Redirect from="*" to="/register" />
      <Route path="/login" exact component={Login} />
      <Route path="/register" exact component={Register} />
      <Route path="/" exact component={Todos} />
    </Router>
  );
};
