export function getWindowId(id: string) {
  return `win_${id}`;
}

export function getWindowXYById(
  windowsMap: Record<string, WindowData>,
  windowId: string
): [number, number] {
  const windowState = windowsMap[getWindowId(windowId)];
  return [windowState[0], windowState[1]];
}

export function getWindowSizeById(
  windowsMap: Record<string, WindowData>,
  windowId: string
): [number, number] {
  const windowState = windowsMap[getWindowId(windowId)];
  return [windowState[2], windowState[3]];
}

export function getWindowScrollTopById(
  windowsMap: Record<string, WindowData>,
  windowId: string
): number {
  const windowState = windowsMap[getWindowId(windowId)];
  return windowState[4];
}

export function calcCentralizedWindowXY(
  width: number,
  height: number,
  offsetX = 0,
  offsetY = 0,
  randomizeOffsets = true
): [number, number] {
  const viewportWidth = window.innerWidth;
  const viewportHeight = window.innerHeight;
  if (randomizeOffsets) {
    offsetX += Math.random() * 140 - 70;
    offsetY += Math.random() * 140 - 70;
  }
  let top = (viewportHeight - height) / 2 + offsetY;
  const left = (viewportWidth - width) / 2 + offsetX;
  // Ensure 'top' is at least 50px from the viewport top
  top = Math.max(top, 50);
  return [left, top];
}

export function calcMaximizedWindowWidthHeight(
  widthOffsetPx: number,
  heightOffsetPx: number
): [number, number] {
  const viewportWidth = window.innerWidth;
  const viewportHeight = window.innerHeight;

  const marginPx = 16;

  // Apply width offset in addition to the margin
  const width = viewportWidth - widthOffsetPx - 2 * marginPx;
  const height = viewportHeight - heightOffsetPx - 2 * marginPx;

  return [width, height];
}

export function calcTopRightWindowXY(
  width: number,
  height: number,
  offsetX = 0,
  offsetY = 0
): [number, number] {
  const viewportWidth = window.innerWidth;

  const left = viewportWidth - width + offsetX;
  const top = 0 + offsetY;

  return [left, top];
}
