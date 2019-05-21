import { startsWithWindowsDriveLetter } from "./starts-with-windows-drive-letter.js"

export const isWindowsPath = (path) => startsWithWindowsDriveLetter(path) && path[2] === "\\"
