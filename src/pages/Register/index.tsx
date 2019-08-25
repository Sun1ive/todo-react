import React, { FC } from 'react';
import { TextField, Grid, Button } from '@material-ui/core';
import { REGISTRATION_MUTATION } from '../../api/mutations';
import { useMutation } from '@apollo/react-hooks';
import { Formik } from 'formik';
import { Loading } from '../../components/Loading';
import { useStyles } from './index.styles';

export const Register: FC = () => {
  const styles = useStyles();

  const [register, { data, called, error, loading }] = useMutation(
    REGISTRATION_MUTATION
  );

  if (loading) {
    return (
      <Grid
        className={styles.root}
        alignItems="center"
        justify="center"
        container
      >
        <Loading />
      </Grid>
    );
  }

  return (
    <Grid
      className={styles.root}
      alignItems="center"
      justify="center"
      container
    >
      <Grid item xs={4}>
        <Formik
          initialValues={{
            email: '',
            password: '',
            username: ''
          }}
          onSubmit={async ({ email, password, username }) => {
            try {
              const res = await register({
                variables: {
                  email,
                  password,
                  username
                }
              });
              console.log(res);
            } catch (error) {
              console.log('error ', error);
            }
          }}
        >
          {({ values, handleSubmit, handleChange }) => (
            <form className={styles.form} onSubmit={handleSubmit}>
              <TextField
                fullWidth
                id="email"
                onChange={handleChange}
                margin="normal"
                value={values.email}
                label="Email"
              />

              <TextField
                fullWidth
                id="password"
                onChange={handleChange}
                margin="normal"
                value={values.password}
                label="Password"
              />

              <TextField
                fullWidth
                id="username"
                onChange={handleChange}
                margin="normal"
                value={values.username}
                label="Username"
              />

              <Button variant="contained" color="primary" type="submit">
                Register
              </Button>
            </form>
          )}
        </Formik>
      </Grid>
    </Grid>
  );
};
