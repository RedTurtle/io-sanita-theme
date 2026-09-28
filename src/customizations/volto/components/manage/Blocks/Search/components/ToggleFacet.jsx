/* CUSTOMIZATIONS:
  - Agid styling
  - a11y: aria-describedby agganciato al titolo del filtro, che è un id
    esistente nel DOM: prima conteneva il testo della label (WCAG 4.1.1/4.1.2)
*/
import React, { useId } from 'react';
import { Toggle, FormGroup } from 'design-react-kit';

const ToggleFacet = (props) => {
  const { facet, isEditMode, onChange, value } = props; // value, choices, isMulti, onChange,
  const titleId = useId();
  const title = facet?.title ?? facet?.field?.label;

  /* a11y: la descrizione è il titolo del filtro, ma solo quando aggiunge
     qualcosa al nome del controllo; altrimenti niente attributo. */
  const describedBy =
    title && title !== facet?.field?.label ? titleId : undefined;

  return (
    <div className="checkbox-facet">
      <h6 className="mb-3 columnTextTitle" id={titleId}>
        {title}
      </h6>
      <FormGroup check className="radio">
        <Toggle
          label={facet?.field?.label}
          checked={value || typeof value === 'string'}
          disabled={isEditMode}
          onChange={({ target }) => {
            onChange(facet.field.value, target.checked);
          }}
          aria-describedby={describedBy}
        />
      </FormGroup>
    </div>
  );
};

ToggleFacet.stateToValue = ({ facetSettings, index, selectedValue }) => {
  return selectedValue || typeof selectedValue === 'string';
};

ToggleFacet.valueToQuery = ({ value, facet }) => {
  return value || typeof value === 'string'
    ? {
        i: facet.field.value,
        o: 'plone.app.querystring.operation.boolean.isTrue',
        v: '',
      }
    : null;
};

export default ToggleFacet;
