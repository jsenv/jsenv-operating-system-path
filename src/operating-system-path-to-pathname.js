import { isWindowsPath } from "./is-windows-path.js"
import { replaceBackSlashesWithSlashes } from "./replace-back-slashes-with-slashes.js"

export const operatingSystemPathToPathname = (operatingSystemPath) => {
  if (isWindowsPath(operatingSystemPath)) {
    return `/${replaceBackSlashesWithSlashes(operatingSystemPath)}`
  }

  // linux and mac operatingSystemFilename === pathname
  return operatingSystemPath
}
