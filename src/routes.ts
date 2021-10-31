import { lazy, LazyExoticComponent } from 'react';

const HomePage = lazy(() => import('pages/HomePage'));
const ArtistPage = lazy(() => import('pages/ArtistPage'));
const SearchPage = lazy(() => import('pages/SearchPage'));
const NotFoundPage = lazy(() => import('pages/NotFoundPage'));

export const routes: {
  path: string;
  Component: LazyExoticComponent<() => JSX.Element>;
}[] = [
  {
    path: '/',
    Component: HomePage,
  },
  {
    path: '/artist/:artistName',
    Component: ArtistPage,
  },
  {
    path: '/search',
    Component: SearchPage,
  },
  {
    path: '/404',
    Component: NotFoundPage,
  },
];
