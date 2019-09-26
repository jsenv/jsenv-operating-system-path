import { hrefToPathname, pathnameToDirname } from "@jsenv/href"
import { pathnameToOperatingSystemPath } from "./pathname-to-operating-system-path.js"

export const importMetaURLToFolderPath = (importMetaURL) => {
  const pathname = hrefToPathname(importMetaURL)
  const folderPathname = pathnameToDirname(pathname)
  return pathnameToOperatingSystemPath(folderPathname)
}
