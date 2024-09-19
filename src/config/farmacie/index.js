import farmacieSVG from '@plone/volto/icons/first-aids.svg';
import {
  SearchFarmaciaView,
  SearchFarmaciaEdit,
} from 'io-sanita-theme/components/Blocks/SearchFarmacia';
import { FarmaciaView } from 'io-sanita-theme/components/View/Farmacia';

export const applyFarmacieConfig = (config) => {
  config.blocks.blocksConfig.searchFarmacia = {
    id: 'searchFarmacia',
    title: 'Ricerca farmacie', // ricerca turni o ferie farmacie
    icon: farmacieSVG,
    group: 'search',
    view: SearchFarmaciaView,
    edit: SearchFarmaciaEdit,
    restricted: false,
    mostUsed: false,
    security: {
      addPermission: [],
      view: [],
    },
    sidebarTab: 1,
  };

  config.views.contentTypesViews.Farmacia = FarmaciaView;

  // TODO: valutare di spostarle su backends
  config.settings.siteProperties.listAreeTerritoriali = [
    {
      value: '1',
      label: 'Argenta',
    },
    {
      value: '2',
      label: 'Bondeno',
    },
    {
      value: '3',
      label:
        'Cento, Sant`Agostino, Mirabello, Poggio Renatico, Vigarano Mainarda',
    },
    {
      value: '4',
      label: 'Comacchio, Codigoro, Lagosanto, Goro, Mesola',
    },
    {
      value: '5',
      label: 'Copparo, Jolanda di Savoia, Riva del Po, Tresignana',
    },
    {
      value: '6',
      label: 'Portomaggiore, Masi Torello, Ostellato, Fiscaglia, Voghiera',
    },
    {
      value: '7',
      label: 'Ferrara',
    },
  ];

  return config;
};
