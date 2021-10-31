import { FC } from 'react';
import { ArtistImageSize } from 'features/artist/types';
import classes from './classes.module.css';

type Props = {
  imageSet: Record<ArtistImageSize, string>;
  name: string | undefined;
};

export const ArtistImage: FC<Props> = ({ imageSet, name }) => {
  return (
    <picture>
      <source media="(max-width: 768px)" srcSet={imageSet.extralarge} />
      <source media="(min-width: 769px)" srcSet={imageSet.mega} />
      <img className={classes.img} src={imageSet.mega} alt={name ?? ''} />
    </picture>
  );
};
