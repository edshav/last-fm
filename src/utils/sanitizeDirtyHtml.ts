import sanitizeHtml from 'sanitize-html';

export const sanitizeDirtyHtml = (dirtyHtml: string) => sanitizeHtml(dirtyHtml);
