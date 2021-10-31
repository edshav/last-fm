import { ChangeEvent, FC } from 'react';
import classes from './classes.module.css';

type Props = {
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

export const SearchInput: FC<Props> = ({ value, onChange }) => {
  return (
    <>
      &#128270;
      <input className={classes.input} value={value} onChange={onChange} />
    </>
  );
};
