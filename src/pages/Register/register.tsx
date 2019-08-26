import React, { FC } from 'react';
import {
  TextField,
  Grid,
  Button,
  Typography,
  withStyles
} from '@material-ui/core';
import { REGISTRATION_MUTATION } from '../../api/mutations';
import { useMutation } from '@apollo/react-hooks';
import { Formik } from 'formik';
import { Loading } from '../../components/Loading/loading';
import { useStyles } from './register.styles';
import { registerSchema } from '../../validation/register.schema';

export const ValidationTextField = withStyles({
  root: {
    '& input:valid + fieldset': {
      borderColor: '#3f51b5',
      borderWidth: 2
    },
    '& input:invalid + fieldset': {
      borderColor: 'red',
      borderWidth: 2
    },
    '& input:valid:focus + fieldset': {
      borderLeftWidth: 6,
      padding: '4px !important' // override inline-style
    }
  }
})(TextField);

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
            return (
              <form className={styles.form} onSubmit={handleSubmit}>
                <Typography
                  style={{ marginBottom: '1rem' }}
                  variant="h5"
                  component="h1"
                >
                  Registration form
                </Typography>

                <ValidationTextField
                  label="email"
                  fullWidth
                  className={styles.margin}
                  error={isValid(errors, 'email')}
                  onChange={handleChange}
                  variant="outlined"
                  value={values.email}
                  id="email"
                />

                <ValidationTextField
                  label="password"
                  fullWidth
                  className={styles.margin}
                  error={isValid(errors, 'password')}
                  onChange={handleChange}
                  variant="outlined"
                  value={values.password}
                  id="password"
                />

                <ValidationTextField
                  label="username"
                  className={styles.margin}
                  fullWidth
                  error={isValid(errors, 'username')}
                  onChange={handleChange}
                  variant="outlined"
                  value={values.username}
                  id="username"
                />

                <Button
                  disabled={Object.keys(errors).length > 0}
                  variant="contained"
                  color="primary"
                  type="submit"
                >
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
