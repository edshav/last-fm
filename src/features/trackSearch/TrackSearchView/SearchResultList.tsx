import { FC } from 'react';
import { SearchTrack } from 'features/trackSearch/types';
import { styled } from 'styles/stitches.config';

type Props = {
  searchTrackList: SearchTrack[] | undefined;
};

export const SearchResultList: FC<Props> = ({ searchTrackList }) => {
  if (!searchTrackList) return null;
  return (
    <Table>
      <thead>
        <tr>
          <THeader>track</THeader>
          <THeader>artist</THeader>
        </tr>
      </thead>
      <tbody>
        {searchTrackList.map(({ artist, name }, index) => (
          <BodyRow key={name + artist + index}>
            <TData>{name}</TData>
            <TData>{artist}</TData>
          </BodyRow>
        ))}
      </tbody>
    </Table>
  );
};

const Table = styled('table', {
  mt: '$5',
  width: '100%',
});

const THeader = styled('th', {
  backgroundColor: '$primary100',
  py: '$2',
});

const BodyRow = styled('tr', {
  '&:nth-child(2n)': {
    backgroundColor: '$gray200',
  },
});

const TData = styled('td', {
  padding: '$1 $3',
});
