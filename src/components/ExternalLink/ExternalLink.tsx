import { FC } from 'react';

type Props = {
  href: string;
  className?: string;
};

export const ExternalLink: FC<Props> = ({ href, className, children }) => {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
      {children}
    </a>
  );
};
