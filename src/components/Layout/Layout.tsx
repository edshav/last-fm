import { FC } from 'react-router/node_modules/@types/react';
import Footer from 'components/Layout/Footer/Footer';
import Header from 'components/Layout/Header/Header';
import classes from './classes.module.css';
import Container from './Container/Container';

const title = 'Last FM Artists';
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
    <div className={classes.container}>
      <header className={classes.header}>
        <Container>
          <Header sections={sections} title={title} />
        </Container>
      </header>
      <main className={classes.main}>
        <Container>{children}</Container>
      </main>
      <footer className={classes.footer}>
        <Container>
          <Footer text={footerText} />
        </Container>
      </footer>
    </div>
  );
};
