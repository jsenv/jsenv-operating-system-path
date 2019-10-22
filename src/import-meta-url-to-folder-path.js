import { pathnameToOperatingSystemPath } from "./pathname-to-operating-system-path.js"

export const importMetaURLToFolderPath = (importMetaURL) => {
  const pathname = importMetaURL.slice("file://".length)
  const folderPathname = pathnameToDirname(pathname)
  return pathnameToOperatingSystemPath(folderPathname)
}

const pathnameToDirname = (pathname) => {
  const slashLastIndex = pathname.lastIndexOf("/")
  if (slashLastIndex === -1) return ""

  return pathname.slice(0, slashLastIndex)
}
