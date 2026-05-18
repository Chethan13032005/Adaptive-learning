// Accessibility: Line Spacing and Paragraph Typography Utilities
export interface TypographySpacing {
  lineHeight: number;
  paragraphSpacing: number;
  wordSpacing: number;
}

export function setLineHeightMultiplier(element: HTMLElement, multiplier: number): void {
  element.style.lineHeight = multiplier.toFixed(2);
}

export function setParagraphSpacing(element: HTMLElement, marginEm: number): void {
  const paragraphs = element.querySelectorAll('p');
  paragraphs.forEach(p => {
    (p as HTMLElement).style.marginBottom = `${marginEm}em`;
  });
}

export function resetTypographySpacing(element: HTMLElement): void {
  element.style.lineHeight = '';
  const paragraphs = element.querySelectorAll('p');
  paragraphs.forEach(p => {
    (p as HTMLElement).style.marginBottom = '';
  });
}


// Unified Paragraph Spacing Adjuster
export function setAndPersistLineSpacing(spacingMultiplier: number): void {
  const bounded = Math.max(1.2, Math.min(2.8, spacingMultiplier));
  document.documentElement.style.setProperty('--content-line-height', bounded.toString());
  localStorage.setItem('adaptive_line_spacing', bounded.toString());
}
