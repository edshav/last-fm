import { FC } from 'react';
import { Link } from 'react-router-dom';
import { styled } from 'styles/stitches.config';

type Props = {
  sections: ReadonlyArray<{
    title: string;
    url: string;
  }>;
};

export const HeaderNav: FC<Props> = ({ sections }) => {
  return (
    <Nav>
      {sections.map(({ title, url }) => (
        <StyledLink key={url} to={url}>
          {title}
        </StyledLink>
      ))}
    </Nav>
  );
};

const StyledLink = styled(Link, {
  fontSize: '$6',
  fontWeight: '$3',
});

const Nav = styled('nav', {
  display: 'flex',
  gap: '$4',
});
