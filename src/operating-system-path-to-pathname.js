import { isWindowsPath } from "./is-windows-path.js"
import { replaceBackSlashesWithSlashes } from "./replace-back-slashes-with-slashes.js"

export const operatingSystemPathToPathname = (operatingSystemPath) => {
  if (typeof operatingSystemPath !== "string") {
    throw new TypeError(`operatingSystemPath must be a string, got ${operatingSystemPath}`)
  }

  if (operatingSystemPath.startsWith("file://")) {
    return operatingSystemPath.slice("file://".length)
  }

  if (isWindowsPath(operatingSystemPath)) {
    return `/${replaceBackSlashesWithSlashes(operatingSystemPath)}`
  }

  // linux and mac operatingSystemFilename === pathname
  return operatingSystemPath
}
