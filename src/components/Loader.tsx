import { SerializedError } from '@reduxjs/toolkit';
import { FC, ReactNode } from 'react';
import { LastFmError } from 'services/lastFm/baseQueryFn';
import { keyframes, styled } from 'styles/stitches.config';
import { parseError } from 'utils/parseError';

type Props = {
  isLoading: boolean;
  isError: boolean;
  hasData: boolean;
  error: LastFmError | SerializedError | undefined;
  children: ReactNode;
};

export const Loader: FC<Props> = ({ children, isLoading, isError, error, hasData }) => {
  const errorMessage = parseError(error);

  if (isLoading)
    return (
      <LoaderContainer>
        <LdsRipple>
          <div></div>
          <div></div>
        </LdsRipple>
      </LoaderContainer>
    );

  if (isError) return <LoaderContainer>{errorMessage}</LoaderContainer>;

  if (!hasData) return <LoaderContainer>No data</LoaderContainer>;

  return <>{children}</>;
};

const LoaderContainer = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100%',
});

const ldsRipple = keyframes({
  '0%': {
    top: '36px',
    left: '36px',
    width: 0,
    height: 0,
    opacity: 1,
  },
  '100%': {
    top: '0px',
    left: '0px',
    width: '72px',
    height: '72px',
    opacity: 0,
  },
});

const LdsRipple = styled('div', {
  display: 'inline-block',
  position: 'relative',
  width: '80px',
  height: '80px',
  '& div': {
    position: 'absolute',
    border: '4px solid',
    borderColor: '$hightContrast',
    opacity: 1,
    borderRadius: '50%',
    animation: `${ldsRipple} 1s cubic-bezier(0, 0.2, 0.8, 1) infinite`,
  },
  '& div:nth-child(2)': {
    animationDelay: '-0.5s',
  },
});
