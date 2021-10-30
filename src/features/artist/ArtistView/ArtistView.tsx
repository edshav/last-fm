import { FC } from 'react';
import { useParams } from 'react-router-dom';
import Loader from 'components/Loader/Loader';
import { useArtistGetInfoQuery } from '../api/artistApi';
import { TagListView } from './TagListView/TagListView';
import classes from './classes.module.css';

export const ArtistView: FC = () => {
  const { artistName } = useParams<{ artistName: string }>();

  const { data, isLoading, error, isError } = useArtistGetInfoQuery({ artistName });
  const { bio, image, name, tags } = data?.artist ?? {};
  const { content, summary } = bio ?? {};

  return (
    <Loader isLoading={isLoading} isError={isError} error={error}>
      <div className={classes.artistContainer}>
        {image ? <img src={image} alt={name ?? ''} /> : null}
        <div>
          <h1 className={classes.name}>{name}</h1>
          {tags ? <TagListView tags={tags} /> : null}
          {summary ? <p>{summary}</p> : null}
        </div>
      </div>
      {content ? <p>{content}</p> : null}
    </Loader>
  );
};
