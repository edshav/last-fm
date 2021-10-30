import { FC } from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink } from 'components/ExternalLink/ExternalLink';
import { usePrefetch } from 'features/artist/api/artistApi';
import classes from './classes.module.css';

type Props = {
  title: string | null;
  artistName: string;
  imageSrc?: string | null;
  href: string | null;
};

export const TrackCard: FC<Props> = ({ title, artistName, imageSrc, href }) => {
  const prefetchArtist = usePrefetch('artistGetInfo');

  const onPrefetchArtist = () => prefetchArtist({ artistName });

  return (
    <div className={classes.card}>
      <header className={classes.header}>
        <Link
          className={classes.artistLink}
          to={`/artist/${artistName}`}
          onMouseEnter={onPrefetchArtist}
        >
          {artistName}
        </Link>
        <span className={classes.track}>{title}</span>
      </header>
      {imageSrc ? <img className={classes.image} src={imageSrc} alt={title ?? ''} /> : null}
      <footer className={classes.footer}>
        {href ? (
          <ExternalLink href={href} className={classes.externalLink}>
            Learn more
          </ExternalLink>
        ) : null}
      </footer>
    </div>
  );
};
