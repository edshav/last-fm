import { FC } from 'react';
import { Link } from 'react-router-dom';
import { styled } from 'styles/stitches.config';
import { HeaderNav } from './HeaderNav';

type Props = {
  sections: ReadonlyArray<{
    title: string;
    url: string;
  }>;
  title: string;
};

export const HeaderInner: FC<Props> = ({ sections, title }) => {
  return (
    <Container>
      <Heading
        screen={{
          '@bp2': 'wide',
        }}
      >
        <Link to="/">{title}</Link>
      </Heading>
      <HeaderNav sections={sections} />
    </Container>
  );
};

const Container = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
});

const Heading = styled('h1', {
  fontSize: '$2',
  lineHeight: '$2',
  fontWeight: '$3',
  letterSpacing: '$widest',
  '& > a': {
    color: '$hiContrast',
  },
  variants: {
    screen: {
      wide: {
        fontSize: '$6',
        lineHeight: '$6',
      },
    },
  },
});
