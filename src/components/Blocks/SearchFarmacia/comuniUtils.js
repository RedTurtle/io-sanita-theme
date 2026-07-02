/**
 * Options for the "Comune" select, built from the unique `comune` values
 * present in the loaded farmacie.
 */
export const getComuniOptions = (items) =>
  [...new Set((items ?? []).map((item) => item.comune).sort())].map(
    (item) => ({ value: item, label: item }),
  );

/**
 * Farmacie whose `comune` matches the given value (case-insensitive).
 * Returns `items` unchanged when `comuneValue` is falsy.
 */
export const filterFarmacieByComune = (items, comuneValue) => {
  if (!comuneValue) return items ?? [];
  return (items ?? []).filter(
    (item) =>
      item.comune && item.comune.toLowerCase() === comuneValue.toLowerCase(),
  );
};

/**
 * Resolves the react-select value/label pair for the currently selected
 * comune, looking it up in `comuniOptions` so that custom options (whose
 * label differs from their value) are displayed correctly.
 */
export const getComuneSelectValue = (comuneValue, comuniOptions) => {
  if (!comuneValue) return null;
  return (
    (comuniOptions ?? []).find((opt) => opt.value === comuneValue) ?? {
      value: comuneValue,
      label: comuneValue,
    }
  );
};
