/**
 * Convert a string into a URL-friendly slug.
 */
export const slugify = (str: string): string =>
  str
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")       // replace spaces with -
    .replace(/[^\w-]+/g, "");   // remove non-word chars