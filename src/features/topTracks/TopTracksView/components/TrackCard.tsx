import { FC } from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink } from 'components/ExternalLink';
import { usePrefetch } from 'features/artist/api/artistApi';
import { TracksImageSize } from 'features/topTracks/types';
import { stitchesConfig, styled } from 'styles/stitches.config';

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
    <CardContainer
      screen={{
        '@bp2': 'wide',
      }}
    >
      <CardHeader>
        <ArtistLink to={`/artist/${artistName}`} onMouseEnter={onPrefetchArtist}>
          {artistName}
        </ArtistLink>
        <TrackTitle>{title}</TrackTitle>
      </CardHeader>
      <main>
        <picture>
          <source media={stitchesConfig.media.bp0} srcSet={imageSet.medium} />
          <source media={stitchesConfig.media.bp1} srcSet={imageSet.large} />
          <source media={stitchesConfig.media.bp2} srcSet={imageSet.extralarge} />
          <Image src={imageSet.large} alt={title ?? ''} />
        </picture>
      </main>
      <CardFooter>
        {href ? <LastFmLink href={href}>Read&nbsp;more on&nbsp;Last.fm</LastFmLink> : null}
      </CardFooter>
    </CardContainer>
  );
};

const CardContainer = styled('li', {
  backgroundColor: '$gray900',
  color: '$loContrast',
  transition: 'box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
  borderRadius: '$2',
  boxShadow:
    'rgba(0, 0, 0, 0.2) 0px 2px 1px -1px, rgba(0, 0, 0, 0.14) 0px 1px 1px 0px, rgba(0, 0, 0, 0.12) 0px 1px 3px 0px',
  backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05))',
  overflow: 'hidden',
  display: 'flex',
  flexDirection: 'column',
  width: 200,
  variants: {
    screen: {
      wide: {
        width: 350,
      },
    },
  },
});

const CardHeader = styled('header', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'center',
  padding: '$3',
  minHeight: '60px',
});

const Image = styled('img', {
  display: 'block',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center top',
  objectFit: 'cover',
  width: '100%',
  height: 'auto',
});

const CardFooter = styled('footer', {
  padding: '$3',
  textAlign: 'center',
  marginTop: 'auto',
});

const LastFmLink = styled(ExternalLink, {
  lineHeight: '$3',
  textTransform: 'uppercase',
  textDecoration: 'none',
  color: '$primary200',
  transition: '$1',
  '&:hover': '$primary100',
});

const ArtistLink = styled(Link, {
  color: '$loContrast',
  fontWeight: 400,
  fontSize: '$3',
  lineHeight: 1.43,
  letterSpacing: '$widest',
  transition: '$1',
  '&::after': {
    content: ' →',
  },
  '&:hover': {
    color: '$primary200',
  },
});

const TrackTitle = styled('span', {
  fontWeight: '$2',
  fontSize: '$2',
  lineHeight: '$2',
  color: '$gray300',
  display: 'block',
});
