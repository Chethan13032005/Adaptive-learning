// Comprehensive Keyboard Navigation & Focus Trap Manager
export interface KeyActionMap {
  [key: string]: (e: KeyboardEvent) => void;
}

export class KeyboardNavManager {
  private activeShortcuts: KeyActionMap = {};
  private focusableElements: HTMLElement[] = [];
  private currentFocusIndex: number = -1;

  constructor() {
    this.initDefaultShortcuts();
  }

  private initDefaultShortcuts(): void {
    this.activeShortcuts = {
      'Alt+1': () => this.jumpToSection('main-content'),
      'Alt+2': () => this.jumpToSection('tutor-chat'),
      'Alt+3': () => this.jumpToSection('quiz-section'),
      'Alt+0': () => this.toggleA11yMenu(),
      'Escape': () => this.closeActiveModals()
    };
  }

  public registerShortcut(combo: string, action: (e: KeyboardEvent) => void): void {
    this.activeShortcuts[combo] = action;
  }

  public trapFocus(container: HTMLElement): () => void {
    const selector = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';
    this.focusableElements = Array.from(container.querySelectorAll(selector)) as HTMLElement[];
    if (this.focusableElements.length === 0) return () => {};

    this.currentFocusIndex = 0;
    this.focusableElements[0].focus();

    const handler = (e: KeyboardEvent) => {
      if (e.key !== 'Tab') return;
      if (e.shiftKey) {
        if (document.activeElement === this.focusableElements[0]) {
          e.preventDefault();
          this.focusableElements[this.focusableElements.length - 1].focus();
        }
      } else {
        if (document.activeElement === this.focusableElements[this.focusableElements.length - 1]) {
          e.preventDefault();
          this.focusableElements[0].focus();
        }
      }
    };

    container.addEventListener('keydown', handler);
    return () => container.removeEventListener('keydown', handler);
  }

  private jumpToSection(id: string): void {
    const el = document.getElementById(id);
    if (el) {
      el.focus();
      el.scrollIntoView({ behavior: 'smooth' });
    }
  }

  private toggleA11yMenu(): void {
    const panel = document.getElementById('accessibility-panel');
    if (panel) panel.classList.toggle('active');
  }

  private closeActiveModals(): void {
    document.querySelectorAll('.modal.is-open').forEach(m => m.classList.remove('is-open'));
  }
}
