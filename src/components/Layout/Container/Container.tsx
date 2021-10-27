import { FC } from 'react';
import classes from './classes.module.css';

const Container: FC = ({ children }) => {
  return <div className={classes.container}>{children}</div>;
};

export default Container;
