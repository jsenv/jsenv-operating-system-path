import { startsWithWindowsDriveLetter } from "./starts-with-windows-drive-letter.js"
import { replaceSlashesWithBackSlashes } from "./replace-slashes-with-backslashes.js"

export const pathnameToOperatingSystemPath = (pathname) => {
  if (pathname[0] !== "/") throw new Error(`pathname must start with /`)

  const pathnameWithoutLeadingSlash = pathname.slice(1)
  if (
    startsWithWindowsDriveLetter(pathnameWithoutLeadingSlash) &&
    pathnameWithoutLeadingSlash[2] === "/"
  ) {
    return replaceSlashesWithBackSlashes(pathnameWithoutLeadingSlash)
  }

  // linux mac pathname === operatingSystemFilename
  return pathname
}
