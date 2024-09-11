import loadable from '@loadable/component';

/*Schema*/
export HTMLBlockSchema from 'io-sanita-theme/components/Blocks/HTML/schema';
export { SearchMapSchema } from 'io-sanita-theme/components/Blocks/SearchMap/schema';
export { SearchServiziPrestazioniSchema } from 'io-sanita-theme/components/Blocks/SearchServiziPrestazioni/schema';

/*View*/
export BreakView from 'io-sanita-theme/components/Blocks/Break/View';
export CalloutView from 'io-sanita-theme/components/Blocks/Callout/View';
export SearchMapView from 'io-sanita-theme/components/Blocks/SearchMap/View';
export SearchServiziPrestazioniView from 'io-sanita-theme/components/Blocks/SearchServiziPrestazioni/View';

/*Listing commons*/
export ListingImage from 'io-sanita-theme/components/Blocks/Listing/commons/ListingImage';
export ListingLinkMore from 'io-sanita-theme/components/Blocks/Listing/commons/ListingLinkMore';
export ListingCategory from 'io-sanita-theme/components/Blocks/Listing/commons/ListingCategory';
export ListingText from 'io-sanita-theme/components/Blocks/Listing/commons/ListingText';

/*Listing variations*/
export SimpleCardTemplate from 'io-sanita-theme/components/Blocks/Listing/SimpleCard/SimpleCardTemplate';
export MapTemplate from 'io-sanita-theme/components/Blocks/Listing/Map/MapTemplate';

/*Skeleton*/
export DefaultSkeleton from 'io-sanita-theme/components/Blocks/Listing/Skeletons/DefaultSkeleton';
export MapTemplateSkeleton from 'io-sanita-theme/components/Blocks/Listing/Skeletons/MapTemplateSkeleton';


// export PathFilters, {
//   getPathFiltersButtons,
// } from 'io-sanita-theme/components/Blocks/Listing/commons/PathFilters';

/*Edit*/
const BreakEdit = loadable(() =>
  import(
    /* webpackChunkName: "iosanita-manage" */ 'io-sanita-theme/components/Blocks/Break/Edit'
  ),
);
const CalloutEdit = loadable(() =>
  import(
    /* webpackChunkName: "iosanita-manage" */ 'io-sanita-theme/components/Blocks/Callout/Edit'
  ),
);
const HTMLBlockSidebar = loadable(() =>
  import(
    /* webpackChunkName: "iosanita-manage" */ 'io-sanita-theme/components/Blocks/HTML/Sidebar'
  ),
);
const SearchMapEdit = loadable(() =>
  import(
    /* webpackChunkName: "iosanita-manage" */ 'io-sanita-theme/components/Blocks/SearchMap/Edit'
  ),
);
const SearchMapSidebar = loadable(() =>
  import(
    /* webpackChunkName: "iosanita-manage" */ 'io-sanita-theme/components/Blocks/SearchMap/Sidebar'
  ),
);
const SearchServiziPrestazioniEdit = loadable(() =>
  import(
    /* webpackChunkName: "iosanita-manage" */ 'io-sanita-theme/components/Blocks/SearchServiziPrestazioni/Edit'
  ),
);
const SearchServiziPrestazioniSidebar = loadable(() =>
  import(
    /* webpackChunkName: "iosanita-manage" */ 'io-sanita-theme/components/Blocks/SearchServiziPrestazioni/Sidebar'
  ),
);

export {
  BreakEdit,
  CalloutEdit,
  SearchMapEdit,
  SearchMapSidebar,
  SearchServiziPrestazioniEdit,
  SearchServiziPrestazioniSidebar,
  HTMLBlockSidebar,
};
