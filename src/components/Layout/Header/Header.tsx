import { FC } from 'react';
import { Link } from 'react-router-dom';
import classes from './classes.module.css';

type Props = {
  sections: ReadonlyArray<{
    title: string;
    url: string;
  }>;
  title: string;
};

export const Header: FC<Props> = ({ sections, title }) => {
  return (
    <div className={classes.container}>
      <h1 className={classes.title}>
        <Link to="/">{title}</Link>
      </h1>
      <nav className={classes.nav}>
        {sections.map(({ title, url }) => (
          <Link className={classes.link} key={url} to={url}>
            {title}
          </Link>
        ))}
      </nav>
    </div>
  );
};
