import { FC } from 'react';
import { styled } from 'styles/stitches.config';
import { TagListView } from './TagListView/TagListView';
import { ContentView } from './ContentView/ContentView';
import { ArtistImage } from './ArtistImage/ArtistImage';
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
      <Name>{name}</Name>
      <TagListView tags={tags} />
      {bio ? <ContentView dirtyHtml={bio} /> : null}
    </div>
  );
};

const Name = styled('h1', {
  fontSize: '$8',
});
