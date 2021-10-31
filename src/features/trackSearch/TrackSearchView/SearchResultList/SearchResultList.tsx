import { SearchTrack } from 'features/trackSearch/types';
import { FC } from 'react';

type Props = {
  searchTrackList: SearchTrack[] | undefined;
};

export const SearchResultList: FC<Props> = ({ searchTrackList }) => {
  if (!searchTrackList) return null;
  return (
    <ul>
      {searchTrackList.map(({ artist, name }) => (
        <li key={name + artist}>
          <span>{name}</span> - <span>{artist}</span>
        </li>
      ))}
    </ul>
  );
};
