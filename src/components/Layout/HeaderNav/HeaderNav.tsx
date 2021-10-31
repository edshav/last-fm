import { FC } from 'react';
import { Link } from 'react-router-dom';
import classes from './classes.module.css';

type Props = {
  sections: ReadonlyArray<{
    title: string;
    url: string;
  }>;
};

export const HeaderNav: FC<Props> = ({ sections }) => {
  return (
    <nav className={classes.nav}>
      {sections.map(({ title, url }) => (
        <Link className={classes.link} key={url} to={url}>
          {title}
        </Link>
      ))}
    </nav>
  );
};
