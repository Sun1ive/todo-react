import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import { createStyles, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() =>
  createStyles({
    progress: {}
  })
);

export const Loading = () => {
  const classes = useStyles();

  return <CircularProgress className={classes.progress} />;
};
