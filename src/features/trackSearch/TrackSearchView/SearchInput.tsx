import { ChangeEvent, FC } from 'react';
import { styled } from 'styles/stitches.config';

type Props = {
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

export const SearchInput: FC<Props> = ({ value, onChange }) => {
  return (
    <Container>
      <span>&#128270;</span>
      <Input value={value} onChange={onChange} />
    </Container>
  );
};

const Container = styled('div', {
  marginTop: '$2',
});

const Input = styled('input', {
  $$gray: '$gray900',

  ml: '$1',
  fontSize: '$3',
  lineHeight: '$4',
  color: '$$gray',
  border: '1px solid',
  borderColor: '$$gray',
  padding: '0 $3',
});
