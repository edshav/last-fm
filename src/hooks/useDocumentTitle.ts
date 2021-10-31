import { useEffect } from 'react';
import { appTitle } from 'utils/constants';

export const useDocumentTitle = (subtitle: string | null) => {
  const title = subtitle ? `${appTitle} | ${subtitle}` : appTitle;
  useEffect(() => {
    document.title = title;
  }, [title]);
};
