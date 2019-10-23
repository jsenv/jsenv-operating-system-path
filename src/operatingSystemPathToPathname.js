import { isWindowsPath } from "./is-windows-path.js"
import { replaceBackSlashesWithSlashes } from "./replace-back-slashes-with-slashes.js"

export const operatingSystemPathToPathname = (operatingSystemPath) => {
  if (typeof operatingSystemPath !== "string") {
    throw new TypeError(`operatingSystemPath must be a string, got ${operatingSystemPath}`)
  }

  if (operatingSystemPath.startsWith("file://")) {
    const pathname = operatingSystemPath.slice("file://".length)
    if (pathname.endsWith("/")) {
      return pathname.slice(0, -1)
    }
    return pathname
  }

  if (isWindowsPath(operatingSystemPath)) {
    return `/${replaceBackSlashesWithSlashes(operatingSystemPath)}`
  }

  // linux and mac operatingSystemFilename === pathname
  if (operatingSystemPath.endsWith("/")) {
    return operatingSystemPath.slice(0, -1)
  }
  return operatingSystemPath
}
