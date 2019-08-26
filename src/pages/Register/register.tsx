import React, { FC } from 'react';
import { TextField, Grid, Button, Typography } from '@material-ui/core';
import { REGISTRATION_MUTATION } from '../../api/mutations';
import { useMutation } from '@apollo/react-hooks';
import { Formik } from 'formik';
import { Loading } from '../../components/Loading/loading';
import { useStyles } from './register.styles';
import { registerSchema } from '../../validation/register.schema';
import { Label } from '../../components/Label/label';

interface IErrors<Type = any> {
  [key: string]: Type;
}

const isValid = (errors: IErrors, name: string): boolean => {
  return Object.keys(errors).includes(name);
};

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
          validationSchema={registerSchema}
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
          render={({ values, handleSubmit, handleChange, errors }) => {
            console.log({ errors });
            return (
              <form className={styles.form} onSubmit={handleSubmit}>
                <Typography variant="h5" component="h1">
                  Registration form
                </Typography>

                <Label
                  error={isValid(errors, 'email')}
                  title={isValid(errors, 'email') ? errors.email : ''}
                >
                  <TextField
                    fullWidth
                    id="email"
                    error={isValid(errors, 'email')}
                    onChange={handleChange}
                    margin="normal"
                    value={values.email}
                    label="Email"
                  />
                </Label>

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
            );
          }}
        />
      </Grid>
    </Grid>
  );
};
