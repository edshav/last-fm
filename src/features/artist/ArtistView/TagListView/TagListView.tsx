import { FC } from 'react';
import { ExternalLink } from 'components/ExternalLink/ExternalLink';
import { Tag } from 'features/artist/types';
import classes from './classes.module.css';

type Props = {
  tags: Tag[];
};

export const TagListView: FC<Props> = ({ tags }) => {
  return (
    <ul className={classes.tagsContainer}>
      {tags?.map(({ name, url }) => (
        <li key={name}>
          <ExternalLink className={classes.tag} href={url}>
            {name}
          </ExternalLink>
        </li>
      ))}
    </ul>
  );
};
