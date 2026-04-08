// Accessibility: Large Cursor and Reading Ruler Utilities
export function enableLargeCursor(target: HTMLElement = document.body): void {
  target.classList.add('large-accessibility-cursor');
}

export function disableLargeCursor(target: HTMLElement = document.body): void {
  target.classList.remove('large-accessibility-cursor');
}

export function createReadingRuler(): HTMLDivElement {
  const ruler = document.createElement('div');
  ruler.id = 'a11y-reading-ruler';
  ruler.style.position = 'fixed';
  ruler.style.left = '0';
  ruler.style.width = '100vw';
  ruler.style.height = '32px';
  ruler.style.backgroundColor = 'rgba(255, 255, 0, 0.25)';
  ruler.style.pointerEvents = 'none';
  ruler.style.zIndex = '99999';
  ruler.style.borderTop = '2px solid rgba(255, 215, 0, 0.8)';
  ruler.style.borderBottom = '2px solid rgba(255, 215, 0, 0.8)';
  document.body.appendChild(ruler);
  return ruler;
}
