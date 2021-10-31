import { FC } from 'react';
import { Link } from 'react-router-dom';
import classes from './classes.module.css';

export const NotFound: FC = () => {
  return (
    <div className={classes.notFoundContainer}>
      <h1>404</h1>
      <p>Page not found</p>
      <Link to="/">Go Back</Link>
    </div>
  );
};
