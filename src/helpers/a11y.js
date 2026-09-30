/**
 * Helpers di accessibilità.
 */

/**
 * `innerRef` per gli <Input> di design-react-kit.
 *
 * La libreria aggiunge aria-describedby="<id>Description" a ogni Input che
 * riceve un id, ma l'elemento con quell'id viene renderizzato solo insieme a
 * `infoText` — che per una checkbox non viene nemmeno stampato, perché senza
 * `label`/`placeholder`/`validationText` la libreria salta il wrapper. Il
 * valore non è sovrascrivibile dalle prop: l'Input fa
 * Object.assign({}, rest, extraAttributes, ...), quindi il suo vince.
 *
 * Qui il riferimento viene rimosso solo quando l'elemento descrittivo non
 * esiste davvero: se un giorno la descrizione ci fosse, l'attributo resta.
 *
 * @param {HTMLElement} input
 */
export const removeDanglingAriaDescribedby = (input) => {
  const describedby = input?.getAttribute?.('aria-describedby');
  if (!describedby) return;

  const unresolved = describedby
    .split(/\s+/)
    .filter(Boolean)
    .filter((id) => !document.getElementById(id));

  if (unresolved.length === 0) return;

  const resolved = describedby
    .split(/\s+/)
    .filter(Boolean)
    .filter((id) => document.getElementById(id));

  if (resolved.length > 0) {
    input.setAttribute('aria-describedby', resolved.join(' '));
  } else {
    input.removeAttribute('aria-describedby');
  }
};
