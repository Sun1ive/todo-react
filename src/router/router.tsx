import React, { FC } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
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
    }
  })
);

const RenderButtons: FC<{
  location: string;
}> = (props) => {
  switch (props.location) {
    case '/login':
      return <Button color="inherit">Register</Button>;

    case '/register':
      return <Button color="inherit">Login</Button>;

    default:
      return <Button color="inherit">Login</Button>;
  }
};

export const AppRouter = () => {
  const styles = useStyles();

  return (
    <Router>
      <AppBar position="static">
        <Toolbar className={styles.toolbar}>
          <Typography variant="h6">Todolist</Typography>
          <RenderButtons location={window.location.pathname} />
        </Toolbar>
      </AppBar>
      <Redirect from="*" to="/register" />
      <Route path="/login" exact component={Login} />
      <Route path="/register" exact component={Register} />
      <Route path="/" exact component={Todos} />
    </Router>
  );
};
