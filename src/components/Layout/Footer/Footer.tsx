import { FC } from 'react';
import classes from './classes.module.css';

type Props = {
  text: string;
};

export const Footer: FC<Props> = ({ text }) => {
  return <footer className={classes.container}>{text}</footer>;
};
