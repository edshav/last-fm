import { FC } from 'react';
import { ExternalLink } from 'components/ExternalLink';
import { Tag } from 'features/artist/types';
import { styled } from 'styles/stitches.config';

type Props = {
  tags: Tag[];
};

export const TagListView: FC<Props> = ({ tags }) => {
  return (
    <TagsContainer>
      {tags?.map(({ name, url }) => (
        <li key={name}>
          <TagItem href={url}>{name}</TagItem>
        </li>
      ))}
    </TagsContainer>
  );
};

const TagsContainer = styled('ul', {
  display: 'flex',
  flexWrap: 'wrap',
  gap: '$2',
  marginTop: '1rem',
});

const TagItem = styled(ExternalLink, {
  border: 'solid 1px',
  borderColor: '$hiContrast',
  borderRadius: '3px',
  color: 'var(--color-black)',
  display: 'inline-block',
  padding: '6px 15px 6px',
  maxWidth: '150px',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  verticalAlign: 'middle',
  whiteSpace: 'nowrap',
  transition: 'border-color, 0.2s ease-out',
  '&:hover': {
    borderColor: 'var(--color-primary-200)',
    color: 'var(--color-black)',
  },
});
