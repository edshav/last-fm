import { FC } from 'react';
import { SearchTrack } from 'features/trackSearch/types';
import classes from './classes.module.css';

type Props = {
  searchTrackList: SearchTrack[] | undefined;
};

export const SearchResultList: FC<Props> = ({ searchTrackList }) => {
  if (!searchTrackList) return null;
  return (
    <table className={classes.table}>
      <thead>
        <tr>
          <th>track</th>
          <th>artist</th>
        </tr>
      </thead>
      <tbody>
        {searchTrackList.map(({ artist, name }, index) => (
          <tr key={name + artist + index}>
            <td>{name}</td>
            <td>{artist}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
