import { ChangeEvent, FC } from 'react';
import { styled } from 'styles/stitches.config';

type Props = {
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

export const SearchInput: FC<Props> = ({ value, onChange }) => {
  return (
    <Label>
      <span>Start typing to get search results:&nbsp;</span>
      <Input value={value} onChange={onChange} />
      <span>&#128270;</span>
    </Label>
  );
};

const Input = styled('input', {
  $$gray: '$gray900',
  mr: '$1',
  fontSize: '$3',
  lineHeight: '$4',
  color: '$$gray',
  border: '1px solid',
  borderColor: '$$gray',
  padding: '0 $3',
  width: 200,
});

const Label = styled('label', {
  fontSize: '$3',
  mt: '$3',
});
