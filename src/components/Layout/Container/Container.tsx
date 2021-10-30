import { FC } from 'react';
import classes from './classes.module.css';

export const Container: FC = ({ children }) => {
  return <div className={classes.container}>{children}</div>;
};
