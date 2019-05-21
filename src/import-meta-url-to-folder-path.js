import { hrefToPathname, pathnameToDirname } from "@jsenv/module-resolution"
import { pathnameToOperatingSystemPath } from "./pathname-to-operating-system-path.js"

export const importMetaURLToFolderPath = (importMetaURL) => {
  const pathname = hrefToPathname(importMetaURL)
  const folderPathname = pathnameToDirname(pathname)
  return pathnameToOperatingSystemPath(folderPathname)
}
