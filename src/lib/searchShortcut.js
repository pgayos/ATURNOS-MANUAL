// Atajo de teclado para el buscador de la cabecera: ⌘K en Mac/iOS, Ctrl+K en
// Windows/Linux. Además rellena la pista visual (<kbd data-search-shortcut>)
// con la tecla correcta de la plataforma.

const IS_APPLE = /Mac|iPhone|iPad/.test(navigator.platform);
export const SHORTCUT_KEY_MODIFIER = IS_APPLE ? '⌘' : 'Ctrl+';
const SHORTCUT_KEY = 'K';

/** ¿El elemento ocupa sitio en pantalla? (falso si él o un padre tiene display:none) */
const isVisible = (el) => Boolean(el && el.getClientRects().length > 0);

/**
 * @param {{ input: HTMLInputElement | null, drawerInput?: HTMLInputElement | null, menuToggle?: HTMLElement | null }} config
 *  - input: buscador de la cabecera (escritorio).
 *  - drawerInput / menuToggle: buscador del menú lateral y el botón que lo
 *    abre; se usan cuando el de la cabecera está oculto (tablet y móvil).
 */
export function initSearchShortcut({ input, drawerInput, menuToggle }) {
  if (!input && !drawerInput) return;

  const label = `${SHORTCUT_KEY_MODIFIER}${SHORTCUT_KEY}`;
  document.querySelectorAll('[data-search-shortcut]').forEach((hint) => {
    hint.textContent = label;
    hint.hidden = false;
  });
  const ariaShortcut = `${IS_APPLE ? 'Meta' : 'Control'}+${SHORTCUT_KEY}`;
  input?.setAttribute('aria-keyshortcuts', ariaShortcut);
  drawerInput?.setAttribute('aria-keyshortcuts', ariaShortcut);

  const focusSearch = (target) => {
    target.focus();
    target.select();
  };

  document.addEventListener('keydown', (event) => {
    const modifier = IS_APPLE ? event.metaKey : event.ctrlKey;
    if (!modifier || event.altKey || event.shiftKey || event.key.toLowerCase() !== 'k') return;
    event.preventDefault();

    if (isVisible(input)) {
      focusSearch(input);
      return;
    }
    if (!drawerInput) return;
    // En tablet/móvil el buscador vive en el menú lateral: se abre primero y se
    // enfoca cuando ya es visible.
    if (menuToggle?.getAttribute('aria-expanded') !== 'true') menuToggle?.click();
    requestAnimationFrame(() => {
      if (isVisible(drawerInput)) focusSearch(drawerInput);
    });
  });
}
