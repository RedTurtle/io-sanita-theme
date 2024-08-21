import loadable from '@loadable/component';

/*Schema*/
export HTMLBlockSchema from 'io-sanita-theme/components/Blocks/HTML/schema';
export { SearchStruttureSchema } from 'io-sanita-theme/components/Blocks/SearchStrutture/schema';

/*View*/
export BreakView from 'io-sanita-theme/components/Blocks/Break/View';
export SearchStruttureView from 'io-sanita-theme/components/Blocks/SearchStrutture/View';

/*Skeleton*/
export DefaultSkeleton from 'io-sanita-theme/components/Blocks/Listing/Skeletons/DefaultSkeleton';

/*Listing commons*/
export ListingImage from 'io-sanita-theme/components/Blocks/Listing/commons/ListingImage';
export ListingLinkMore from 'io-sanita-theme/components/Blocks/Listing/commons/ListingLinkMore';
export ListingCategory from 'io-sanita-theme/components/Blocks/Listing/commons/ListingCategory';
export ListingText from 'io-sanita-theme/components/Blocks/Listing/commons/ListingText';
// export PathFilters, {
//   getPathFiltersButtons,
// } from 'io-sanita-theme/components/Blocks/Listing/commons/PathFilters';

/*Edit*/
const BreakEdit = loadable(() =>
  import(
    /* webpackChunkName: "iosanita-manage" */ 'io-sanita-theme/components/Blocks/Break/Edit'
  ),
);
const HTMLBlockSidebar = loadable(() =>
  import(
    /* webpackChunkName: "iosanita-manage" */ 'io-sanita-theme/components/Blocks/HTML/Sidebar'
  ),
);
const SearchStruttureEdit = loadable(() =>
  import(
    /* webpackChunkName: "iosanita-manage" */ 'io-sanita-theme/components/Blocks/SearchStrutture/Edit'
  ),
);
const SearchStruttureSidebar = loadable(() =>
  import(
    /* webpackChunkName: "iosanita-manage" */ 'io-sanita-theme/components/Blocks/SearchStrutture/Sidebar'
  ),
);

export {
  BreakEdit,
  SearchStruttureEdit,
  SearchStruttureSidebar,
  HTMLBlockSidebar,
};
