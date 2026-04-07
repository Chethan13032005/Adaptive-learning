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
