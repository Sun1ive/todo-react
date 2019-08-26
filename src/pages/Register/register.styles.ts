import { makeStyles, createStyles } from '@material-ui/styles';

export const useStyles = makeStyles(() =>
  createStyles({
    root: {
      height: 'calc(100% - 64px)'
    },

    form: {
      boxShadow: '5px 5px 10px rgba(0,0,0,0.3)',
      padding: '3rem 3rem 4rem 3rem'
    }
  })
);
