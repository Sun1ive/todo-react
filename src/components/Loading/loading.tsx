import React from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles(() =>
  createStyles({
    progress: {}
  })
);

export const Loading = () => {
  const classes = useStyles();

  return <CircularProgress className={classes.progress} />;
};
