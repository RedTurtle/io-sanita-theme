import loadable from '@loadable/component';

/*Schema*/
export HTMLBlockSchema from 'io-sanita-theme/components/Blocks/HTML/schema';
export { SearchMapSchema } from 'io-sanita-theme/components/Blocks/SearchMap/schema';

/*View*/
export BreakView from 'io-sanita-theme/components/Blocks/Break/View';
export CalloutView from 'io-sanita-theme/components/Blocks/Callout/View';
export SearchMapView from 'io-sanita-theme/components/Blocks/SearchMap/View';

/*Listing commons*/
export ListingImage from 'io-sanita-theme/components/Blocks/Listing/commons/ListingImage';
export ListingLinkMore from 'io-sanita-theme/components/Blocks/Listing/commons/ListingLinkMore';
export ListingCategory from 'io-sanita-theme/components/Blocks/Listing/commons/ListingCategory';
export ListingText from 'io-sanita-theme/components/Blocks/Listing/commons/ListingText';
export RassegnaInfo from 'io-sanita-theme/components/Blocks/Listing/commons/RassegnaInfo';

/*Listing variations*/
export SimpleCardTemplate from 'io-sanita-theme/components/Blocks/Listing/SimpleCard/SimpleCardTemplate';
export MapTemplate from 'io-sanita-theme/components/Blocks/Listing/Map/MapTemplate';
export HighlightedContentTemplate from 'io-sanita-theme/components/Blocks/Listing/HighlightedContent/HighlightedContentTemplate';

/*Skeleton*/
export DefaultSkeleton from 'io-sanita-theme/components/Blocks/Listing/Skeletons/DefaultSkeleton';
export MapTemplateSkeleton from 'io-sanita-theme/components/Blocks/Listing/Skeletons/MapTemplateSkeleton';
export HighlightedContentTemplateSkeleton from 'io-sanita-theme/components/Blocks/Listing/Skeletons/HighlightedContentTemplateSkeleton';

// export PathFilters, {
//   getPathFiltersButtons,
// } from 'io-sanita-theme/components/Blocks/Listing/commons/PathFilters';

/*Edit*/
const BreakEdit = loadable(
  () =>
    import(
      /* webpackChunkName: "iosanita-manage" */ 'io-sanita-theme/components/Blocks/Break/Edit'
    ),
);
const CalloutEdit = loadable(
  () =>
    import(
      /* webpackChunkName: "iosanita-manage" */ 'io-sanita-theme/components/Blocks/Callout/Edit'
    ),
);
const HTMLBlockSidebar = loadable(
  () =>
    import(
      /* webpackChunkName: "iosanita-manage" */ 'io-sanita-theme/components/Blocks/HTML/Sidebar'
    ),
);
const SearchMapEdit = loadable(
  () =>
    import(
      /* webpackChunkName: "iosanita-manage" */ 'io-sanita-theme/components/Blocks/SearchMap/Edit'
    ),
);
const SearchMapSidebar = loadable(
  () =>
    import(
      /* webpackChunkName: "iosanita-manage" */ 'io-sanita-theme/components/Blocks/SearchMap/Sidebar'
    ),
);

export {
  BreakEdit,
  CalloutEdit,
  SearchMapEdit,
  SearchMapSidebar,
  HTMLBlockSidebar,
};
