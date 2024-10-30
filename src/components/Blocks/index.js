import loadable from '@loadable/component';

/*Schema*/
export HTMLBlockSchema from 'io-sanita-theme/components/Blocks/HTML/schema';
export { SearchMapSchema } from 'io-sanita-theme/components/Blocks/SearchMap/schema';
export { SearchFarmaciaSchema } from 'io-sanita-theme/components/Blocks/SearchFarmacia/schema';
export { SearchServiziProcedureSchema } from 'io-sanita-theme/components/Blocks/SearchServiziProcedure/schema';
export { TopicsListSchema } from 'io-sanita-theme/components/Blocks/TopicsList/schema';
export { CTASchema } from 'io-sanita-theme/components/Blocks/CTA/schema';
export { AlertSchema } from 'io-sanita-theme/components/Blocks/Alert/schema';

/*View*/
export BreakView from 'io-sanita-theme/components/Blocks/Break/View';
export CalloutView from 'io-sanita-theme/components/Blocks/Callout/View';

export const AlertView = loadable(() =>
  import(
    /* webpackChunkName: "ISBlockAlert" */ 'io-sanita-theme/components/Blocks/Alert/View'
  ),
);
export const QuickSearchView = loadable(() =>
  import(
    /* webpackChunkName: "ISBlockSearchMap" */ 'io-sanita-theme/components/Blocks/QuickSearch/View'
  ),
);
export const SearchMapView = loadable(() =>
  import(
    /* webpackChunkName: "ISBlockSearchMap" */ 'io-sanita-theme/components/Blocks/SearchMap/View'
  ),
);
export const SearchServiziProcedureView = loadable(() =>
  import(
    /* webpackChunkName: "ISBlockSearchServiziProcedure" */ 'io-sanita-theme/components/Blocks/SearchServiziProcedure/View'
  ),
);
export const SearchFarmaciaView = loadable(() =>
  import(
    /* webpackChunkName: "ISBlockSearchFarmacia" */ 'io-sanita-theme/components/Blocks/SearchFarmacia/View'
  ),
);
export const HeroView = loadable(() =>
  import(
    /* webpackChunkName: "ISBlockHero" */ 'io-sanita-theme/components/Blocks/Hero/View'
  ),
);
export const TopicsListView = loadable(() =>
  import(
    /* webpackChunkName: "ISBlockTopicsList" */ 'io-sanita-theme/components/Blocks/TopicsList/View'
  ),
);
export const CTAView = loadable(() =>
  import(
    /* webpackChunkName: "ISBlockCTA" */ 'io-sanita-theme/components/Blocks/CTA/View'
  ),
);

/*Listing commons*/
export ListingImage from 'io-sanita-theme/components/Blocks/Listing/commons/ListingImage';
export ListingLinkMore from 'io-sanita-theme/components/Blocks/Listing/commons/ListingLinkMore';
export ListingText from 'io-sanita-theme/components/Blocks/Listing/commons/ListingText';
export RassegnaInfo from 'io-sanita-theme/components/Blocks/Listing/commons/RassegnaInfo';
export ListingContainer from 'io-sanita-theme/components/Blocks/Listing/commons/ListingContainer';

/*Listing variations*/
export SimpleCardTemplate from 'io-sanita-theme/components/Blocks/Listing/SimpleCard/SimpleCardTemplate';
export MapTemplate from 'io-sanita-theme/components/Blocks/Listing/Map/MapTemplate';
export HighlightedContentTemplate from 'io-sanita-theme/components/Blocks/Listing/HighlightedContent/HighlightedContentTemplate';
export InEvidenceTemplate from 'io-sanita-theme/components/Blocks/Listing/InEvidence/InEvidenceTemplate';
export CardWithImageTemplate from 'io-sanita-theme/components/Blocks/Listing/CardWithImage/CardWithImageTemplate';
export SimpleListTemplate from 'io-sanita-theme/components/Blocks/Listing/SimpleList/SimpleListTemplate';

/*Skeleton*/
export DefaultSkeleton from 'io-sanita-theme/components/Blocks/Listing/Skeletons/DefaultSkeleton';
export MapTemplateSkeleton from 'io-sanita-theme/components/Blocks/Listing/Skeletons/MapTemplateSkeleton';
export HighlightedContentTemplateSkeleton from 'io-sanita-theme/components/Blocks/Listing/Skeletons/HighlightedContentTemplateSkeleton';
export InEvidenceTemplateSkeleton from 'io-sanita-theme/components/Blocks/Listing/Skeletons/InEvidenceTemplateSkeleton';
export CardWithImageTemplateSkeleton from 'io-sanita-theme/components/Blocks/Listing/Skeletons/CardWithImageTemplateSkeleton';
export SimpleListTemplateSkeleton from 'io-sanita-theme/components/Blocks/Listing/Skeletons/SimpleListTemplateSkeleton';

/*Edit*/
const AlertEdit = loadable(() =>
  import(
    /* webpackChunkName: "iosanita-manage" */ 'io-sanita-theme/components/Blocks/Alert/Edit'
  ),
);
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
const CTAEdit = loadable(() =>
  import(
    /* webpackChunkName: "iosanita-manage" */ 'io-sanita-theme/components/Blocks/CTA/Edit'
  ),
);
const HeroEdit = loadable(() =>
  import(
    /* webpackChunkName: "iosanita-manage" */ 'io-sanita-theme/components/Blocks/Hero/Edit'
  ),
);
const QuickSearchEdit = loadable(() =>
  import(
    /* webpackChunkName: "iosanita-manage" */ 'io-sanita-theme/components/Blocks/QuickSearch/Edit'
  ),
);
const SearchFarmaciaEdit = loadable(() =>
  import(
    /* webpackChunkName: "iosanita-manage" */ 'io-sanita-theme/components/Blocks/SearchFarmacia/Edit'
  ),
);
const SearchMapEdit = loadable(() =>
  import(
    /* webpackChunkName: "iosanita-manage" */ 'io-sanita-theme/components/Blocks/SearchMap/Edit'
  ),
);
const SearchServiziProcedureEdit = loadable(() =>
  import(
    /* webpackChunkName: "iosanita-manage" */ 'io-sanita-theme/components/Blocks/SearchServiziProcedure/Edit'
  ),
);

const TopicsListEdit = loadable(() =>
  import(
    /* webpackChunkName: "iosanita-manage" */ 'io-sanita-theme/components/Blocks/TopicsList/Edit'
  ),
);

/*Sidebar - only reusable sidebar outside specific edit component.*/
const HTMLBlockSidebar = loadable(() =>
  import(
    /* webpackChunkName: "iosanita-manage" */ 'io-sanita-theme/components/Blocks/HTML/Sidebar'
  ),
);

export {
  AlertEdit,
  BreakEdit,
  CalloutEdit,
  CTAEdit,
  HeroEdit,
  HTMLBlockSidebar,
  QuickSearchEdit,
  SearchFarmaciaEdit,
  SearchMapEdit,
  SearchServiziProcedureEdit,
  TopicsListEdit,
};
