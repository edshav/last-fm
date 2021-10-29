import { FC } from 'react';
import { Link } from 'react-router-dom';
import clsx from 'clsx';
import classes from './classes.module.css';

type Props = {
  href: string | null;
};

const PaginationArrow: FC<Props> = ({ href, children }) => {
  const button = (
    <span className={clsx(href && classes.arrow, !href && classes.arrowDisabled)}>{children}</span>
  );

  return href ? <Link to={href}>{button}</Link> : button;
};

export default PaginationArrow;
