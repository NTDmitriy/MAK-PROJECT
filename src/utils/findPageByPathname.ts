export const findPageByPathname = (
  pages: Record<string, any>,
  pathname: string | null
): string | null => {
  if (!pathname) return null;
  for (const key in pages) {
    const page = pages[key];

    if (page.url === pathname) {
      return page.name;
    }

    if (page.childrens) {
      const foundChildPage = findPageByPathname(page.childrens, pathname);
      if (foundChildPage) {
        return foundChildPage;
      }
    }
  }

  return null;
};
