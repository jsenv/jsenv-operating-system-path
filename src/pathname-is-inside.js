export const pathnameIsInside = (pathname, otherPathname) =>
  pathname.startsWith(`${otherPathname}/`)
