import config from '@plone/volto/registry';

export const getItemIcon = (item) => {
  const type_icons = {
    Servizio: 'it-settings',
    UnitaOrganizzativa: 'it-pa',
    Documento: 'it-file',
    'News Item': 'it-note',
    Event: 'it-calendar',
  };
  let icon = type_icons[item['@type']] || 'it-pa'; //default-icon

  if (item['@type'] === 'News Item') {
    if (
      item.design_italia_meta_type === 'Avvisi' ||
      item.design_italia_meta_type === 'Avviso'
    ) {
      icon = 'exclamation-triangle';
    }

    if (
      // io-comune-v2
      item.design_italia_meta_type === 'Comunicati stampa' ||
      item.design_italia_meta_type === 'Comunicato stampa' ||
      // io-comune-v3
      item.design_italia_meta_type === 'Comunicato (stampa)'
    ) {
      icon = 'it-note';
    }
  }

  const extender = config?.settings?.siteProperties?.extender?.itemIcon;
  let custom_icon = extender ? extender(item) : null;

  return custom_icon || icon;
};

export const getItemListingCategory = ({ item, variation, ...other_props }) => {
  let cat = [];
  if (item) {
    // if (other_props.show_section && item.parent) {
    //   cat.push(item.parent?.title);
    // }
    // if (other_props.show_type) {
    //   cat.push(item.type_title);
    // }
  }

  if (cat.length > 0) {
    return cat.join(cat.length > 1 ? ' - ' : '');
  }
  return null;
};

export const hasGeolocation = (item) => {
  return (
    item?.geolocation &&
    item?.geolocation?.latitude !== 0 &&
    item?.geolocation?.longitude !== 0
  );
};
