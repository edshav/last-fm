import { FC } from 'react';
import { useParams } from 'react-router-dom';
import Loader from 'components/Loader/Loader';
import { useArtistGetInfoQuery } from '../api/artistApi';
import { TagListView } from './TagListView/TagListView';
import { ContentView } from './ContentView/ContentView';
import classes from './classes.module.css';

export const ArtistView: FC = () => {
  const { artistName } = useParams<{ artistName: string }>();

  const { data, isLoading, error, isError } = useArtistGetInfoQuery({ artistName });
  const { bio, image, name, tags } = data?.artist ?? {};

  return (
    <Loader isLoading={isLoading} isError={isError} error={error}>
      <div>
        {image ? <img className={classes.img} src={image} alt={name ?? ''} /> : null}
        <h1 className={classes.name}>{name}</h1>
        {tags ? <TagListView tags={tags} /> : null}
        {bio ? <ContentView dirtyHtml={bio} /> : null}
      </div>
    </Loader>
  );
};
