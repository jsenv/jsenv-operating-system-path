import { replaceBackSlashesWithSlashes } from "./replace-back-slashes-with-slashes.js"

export const windowsPathToPathnameWithoutDriveLetter = (windowsPath) =>
  replaceBackSlashesWithSlashes(windowsPath.slice(2))
