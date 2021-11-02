import { FC } from 'react';
import { Link } from 'react-router-dom';
import { styled } from 'styles/stitches.config';

type Props = {
  href: string | null;
  onHover: (() => void) | undefined;
};

export const PaginationArrow: FC<Props> = ({ href, children, onHover }) => {
  const button = (
    <Arrow condition={href ? 'active' : 'disabled'} onMouseEnter={onHover}>
      {children}
    </Arrow>
  );

  return href ? <Link to={href}>{button}</Link> : button;
};

const Arrow = styled('span', {
  fontSize: '$6',
  color: '$hiContrast',
  display: 'inline-block',
  padding: '$3 $6',
  border: '1px solid',
  borderRadius: '$2',
  transition: '$1',
  variants: {
    condition: {
      active: {
        backgroundColor: '$primary200',
        borderColor: '$primary200',
        '&:hover': {
          backgroundColor: '$primary100',
        },
      },
      disabled: {
        backgroundColor: '$gray300',
        borderColor: '$gray400',
        cursor: 'not-allowed',
        opacity: 0.6,
      },
    },
  },
});
