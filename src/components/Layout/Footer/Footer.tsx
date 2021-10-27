import { FC } from 'react';
import classes from './classes.module.css';

type Props = {
  text: string;
};

const Footer: FC<Props> = ({ text }) => {
  return <footer className={classes.container}>{text}</footer>;
};

export default Footer;
