export const pathnameToRelativePathname = (pathname, otherPathname) =>
  pathname.slice(otherPathname.length)
