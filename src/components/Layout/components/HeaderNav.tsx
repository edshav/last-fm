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
        <StyledLink
          key={url}
          to={url}
          screen={{
            '@bp2': 'wide',
          }}
        >
          {title}
        </StyledLink>
      ))}
    </Nav>
  );
};

const StyledLink = styled(Link, {
  fontSize: '$3',
  fontWeight: '$3',
  variants: {
    screen: {
      wide: {
        fontSize: '$6',
      },
    },
  },
});

const Nav = styled('nav', {
  display: 'flex',
  gap: '$2',
  variants: {
    screen: {
      wide: {
        gap: '$4',
      },
    },
  },
});
