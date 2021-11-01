import { FC } from 'react';
import { styled } from 'styles/stitches.config';
import { sanitizeDirtyHtml } from 'utils/sanitizeDirtyHtml';

type Props = {
  dirtyHtml: string;
};

export const ContentView: FC<Props> = ({ dirtyHtml }) => {
  const cleanHtml = sanitizeDirtyHtml(dirtyHtml);

  return <Container dangerouslySetInnerHTML={{ __html: cleanHtml }} />;
};

const Container = styled('div', {
  marginTop: '$3',
  fontSize: '$3',
  lineHeight: '$4',
  letterSpacing: '$wide',
  textAlign: 'justify',
  textIndent: '2rem',
});
