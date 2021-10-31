import { FC } from 'react';
import { TagListView } from './TagListView/TagListView';
import { ContentView } from './ContentView/ContentView';
import { ArtistImage } from './ArtistImage/ArtistImage';
import classes from './classes.module.css';
import { Artist } from '../types';

type Props = {
  artist: Artist | null | undefined;
};

export const ArtistView: FC<Props> = ({ artist }) => {
  if (!artist) return null;
  const { bio, imageSet, name, tags } = artist;

  return (
    <div>
      <ArtistImage imageSet={imageSet} name={name} />
      <h1 className={classes.name}>{name}</h1>
      <TagListView tags={tags} />
      {bio ? <ContentView dirtyHtml={bio} /> : null}
    </div>
  );
};
