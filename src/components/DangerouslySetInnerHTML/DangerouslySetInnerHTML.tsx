import { DOMAttributes, FC } from 'react';
import sanitizeHtml from 'sanitize-html';

type Props = DOMAttributes<HTMLDivElement> & {
  dirtyHtml: string;
  className?: string;
};

const DangerouslySetInnerHTML: FC<Props> = ({ dirtyHtml, ...restProps }) => {
  const cleanHtml = sanitizeHtml(dirtyHtml);
  return <div dangerouslySetInnerHTML={{ __html: cleanHtml }} {...restProps}></div>;
};

export default DangerouslySetInnerHTML;
