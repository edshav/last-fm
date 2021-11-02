import { FC } from 'react';
import { Link } from 'react-router-dom';
import { styled } from 'styles/stitches.config';

export const NotFound: FC = () => {
  return (
    <NotFoundContainer>
      <h1>404</h1>
      <p>Page not found</p>
      <Link to="/">Go Back</Link>
    </NotFoundContainer>
  );
};

const NotFoundContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100%',
  fontSize: '$6',
  lineHeight: '$6',
});
