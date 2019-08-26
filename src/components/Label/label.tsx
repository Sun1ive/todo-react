import React, { FC } from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';

export interface ILabelProps {
  error?: boolean;
  title?: string;
}

const useStyles = makeStyles(() =>
  createStyles({
    label: {
      fontSize: '0.8rem',
      color: '#000'
    },
    error: {
      color: '#f00',
      fontStyle: 'italic'
    }
  })
);

export const Label: FC<ILabelProps> = ({ children, error, title }) => {
  const styles = useStyles();

  return (
    <label className={`${styles.label} ${error ? styles.error : ''}`}>
      {!!title && <span>{title}</span>}

      {children}
    </label>
  );
};
