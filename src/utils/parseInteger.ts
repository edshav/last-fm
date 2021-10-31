export const parseInteger = (str: string | undefined | null): number | null => {
  if (str === undefined || str === null) return null;
  const num = parseInt(str);
  return Number.isNaN(num) ? null : num;
};
