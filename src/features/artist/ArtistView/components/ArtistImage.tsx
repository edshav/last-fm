import { FC } from 'react';
import { ArtistImageSize } from 'features/artist/types';
import { styled } from 'styles/stitches.config';

type Props = {
  imageSet: Record<ArtistImageSize, string>;
  name: string | undefined;
};

export const ArtistImage: FC<Props> = ({ imageSet, name }) => {
  return (
    <Img
      screen={{
        '@bp2': 'wide',
        '@bp3': 'wider',
      }}
      src={imageSet.mega}
      alt={name ?? ''}
      width="100"
      height="100"
    />
  );
};

const Img = styled('img', {
  float: 'left',
  marginRight: '$3',
  marginBottom: '$3',
  width: 300,
  height: 'auto',
  variants: {
    screen: {
      wide: {
        width: 350,
      },
      wider: {
        width: 400,
      },
    },
  },
});
