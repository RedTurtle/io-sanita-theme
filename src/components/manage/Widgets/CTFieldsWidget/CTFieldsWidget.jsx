import React, { useEffect } from 'react';
import { defineMessages, useIntl } from 'react-intl';
import { useDispatch, useSelector } from 'react-redux';
import { getCTSchema } from 'io-sanita-theme/actions';
import { SelectAutoComplete } from '@plone/volto/components/manage/Widgets';

const CTFieldsWidget = ({ ct, ...props }) => {
  const intl = useIntl();
  const dispatch = useDispatch();
  const ct_fields = useSelector(
    (state) => state.ct_schema?.subrequests?.[ct]?.result?.properties,
  );

  useEffect(() => {
    if (!ct_fields) {
      dispatch(getCTSchema(ct));
    }
  }, [ct]);

  const choices = ct_fields
    ? Object.keys(ct_fields).map((f) => {
        return [f, ct_fields[f].title];
      })
    : [];
  console.log('ct_fields', ct, ct_fields, choices);
  return (
    <>
      {ct_fields && (
        <SelectAutoComplete
          {...props}
          choices={choices}
          // fieldSet="default"
        />
      )}
    </>
  );
};

export default CTFieldsWidget;
