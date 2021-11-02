import { FC } from 'react';
import { styled } from '@stitches/react';
import { HeaderInner } from 'components/Layout/components/HeaderInner';
import { Container } from './components/Container';

const title = 'last.fm artists';
const footerText = 'TIT';

const sections = [
  {
    title: 'Home',
    url: '/',
  },
  {
    title: 'Search',
    url: '/search',
  },
];

export const Layout: FC = ({ children }) => {
  return (
    <Wrapper>
      <Header>
        <Container>
          <HeaderInner sections={sections} title={title} />
        </Container>
      </Header>
      <Main>
        <Container>{children}</Container>
      </Main>
      <Footer>
        <Container>
          <FooterText>{footerText}</FooterText>
        </Container>
      </Footer>
    </Wrapper>
  );
};

const Wrapper = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh',
});

const Header = styled('header', {
  position: 'fixed',
  top: 0,
  right: 0,
  left: 0,
  borderBottom: 'solid 1px $hiContrast',
  height: '$heightHeader',
  backgroundColor: '$gray200',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '0 $paddingXLayout',
});

const Main = styled('main', {
  padding: 'calc($heightHeader + $5) $paddingXLayout $5',
  display: 'flex',
  justifyContent: 'center',
  flex: 1,
});

const Footer = styled('footer', {
  marginTop: 'auto',
  backgroundColor: '$hiContrast',
  color: '$primary200',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '0 $paddingXLayout',
});

const FooterText = styled('div', {
  display: 'flex',
  justifyContent: 'flex-end',
  padding: '$6 0',
});
