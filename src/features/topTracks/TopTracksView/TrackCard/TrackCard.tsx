import { FC } from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink } from 'components/ExternalLink';
import { usePrefetch } from 'features/artist/api/artistApi';
import { TracksImageSize } from 'features/topTracks/types';
import classes from './classes.module.css';

type Props = {
  title: string | null;
  artistName: string;
  imageSet: Record<TracksImageSize, string>;
  href: string | null;
};

export const TrackCard: FC<Props> = ({ title, artistName, imageSet, href }) => {
  const prefetchArtist = usePrefetch('artistGetInfo');

  const onPrefetchArtist = () => prefetchArtist({ artistName });

  return (
    <li className={classes.card}>
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
      <main>
        <picture>
          <source media="(max-width: 768px)" srcSet={imageSet.large} />
          <source media="(min-width: 769px)" srcSet={imageSet.extralarge} />
          <img className={classes.image} src={imageSet.extralarge} alt={title ?? ''} />
        </picture>
      </main>
      <footer className={classes.footer}>
        {href ? (
          <ExternalLink href={href} className={classes.externalLink}>
            Read&nbsp;more on&nbsp;Last.fm
          </ExternalLink>
        ) : null}
      </footer>
    </li>
  );
};
