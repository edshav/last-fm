import { FC } from 'react';
import { DangerouslySetInnerHTML } from 'components/DangerouslySetInnerHTML/DangerouslySetInnerHTML';
import classes from './classes.module.css';

type Props = {
  dirtyHtml: string;
};

export const ContentView: FC<Props> = ({ dirtyHtml }) => {
  console.log(dirtyHtml);

  return <DangerouslySetInnerHTML className={classes.content} dirtyHtml={dirtyHtml} />;
};
