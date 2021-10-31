import { FC } from 'react';
import { Link } from 'react-router-dom';
import clsx from 'clsx';
import classes from './classes.module.css';

type Props = {
  href: string | null;
  onHover: (() => void) | undefined;
};

export const PaginationArrow: FC<Props> = ({ href, children, onHover }) => {
  const button = (
    <span
      className={clsx(href && classes.arrow, !href && classes.arrowDisabled)}
      onMouseEnter={onHover}
    >
      {children}
    </span>
  );

  return href ? <Link to={href}>{button}</Link> : button;
};
