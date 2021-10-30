import { Tag, TagDocument } from '../types';

export const massageTags = (tagsDocument: TagDocument[] | undefined): Tag[] => {
  if (!tagsDocument) return [];
  return tagsDocument.reduce((acc: Tag[], { name, url }) => {
    if (!name || !url) return acc;
    return [...acc, { name, url }];
  }, []);
};
