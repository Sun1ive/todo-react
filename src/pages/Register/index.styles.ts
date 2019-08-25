import { createStyles } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

export const useStyles = makeStyles(() =>
  createStyles({
    root: {
      height: '100%'
    },

    form: {
      boxShadow: '5px 5px 10px rgba(0,0,0,0.3)'
    }
  })
);
