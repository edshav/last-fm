import { FC } from 'react';
import { ExternalLink } from 'components/ui/ExternalLink/ExternalLink';
import classes from './classes.module.css';

type Props = {
  title: string | null;
  artistName: string | null;
  imageSrc?: string | null;
  href: string | null;
};

export const TrackCard: FC<Props> = ({ title, artistName, imageSrc, href }) => {
  return (
    <div className={classes.card}>
      <header className={classes.header}>
        <span className={classes.name}>{artistName}</span>
        <span className={classes.track}>{title}</span>
      </header>
      {imageSrc ? <img className={classes.image} src={imageSrc} alt={title ?? ''} /> : null}
      <footer className={classes.footer}>
        {href ? (
          <ExternalLink href={href} className={classes.link}>
            Learn more
          </ExternalLink>
        ) : null}
      </footer>
    </div>
  );
};
