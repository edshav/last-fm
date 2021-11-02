import { FC } from 'react';
import { ArtistImageSize } from 'features/artist/types';
import { stitchesConfig, styled } from 'styles/stitches.config';

type Props = {
  imageSet: Record<ArtistImageSize, string>;
  name: string | undefined;
};

export const ArtistImage: FC<Props> = ({ imageSet, name }) => {
  return (
    <picture>
      <source media={stitchesConfig.media.bp0} srcSet={imageSet.medium} />
      <source media={stitchesConfig.media.bp1} srcSet={imageSet.large} />
      <source media={stitchesConfig.media.bp2} srcSet={imageSet.extralarge} />
      <source media={stitchesConfig.media.bp3} srcSet={imageSet.mega} />
      <Img
        screen={{
          '@bp2': 'wide',
          '@bp3': 'wider',
        }}
        src={imageSet.large}
        alt={name ?? ''}
      />
    </picture>
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
