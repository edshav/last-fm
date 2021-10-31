import { ChangeEvent, FC } from 'react';

type Props = {
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

export const SearchInput: FC<Props> = ({ value, onChange }) => {
  return (
    <>
      &#128270;
      <input value={value} onChange={onChange} />
    </>
  );
};
