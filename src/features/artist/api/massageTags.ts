import { Tag, TagDocument } from '../types';

export const massageTags = (tagsDocument: TagDocument[] | undefined): Tag[] =>
  tagsDocument?.map(({ name, url }) => ({
    name: name ?? null,
    url: url ?? null,
  })) ?? [];
