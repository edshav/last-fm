import { FC } from 'react';
import { styled } from 'styles/stitches.config';

export const InitialText: FC = () => {
  return <Heading>Start typing to get search results</Heading>;
};

const Heading = styled('h1', {
  fontSize: '$3',
});
