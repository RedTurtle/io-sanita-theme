import loadable from '@loadable/component';

/*Schema*/
export HTMLBlockSchema from 'io-sanita-theme/components/Blocks/HTML/schema';
export { SearchMapSchema } from 'io-sanita-theme/components/Blocks/SearchMap/schema';
export { SearchFarmaciaSchema } from 'io-sanita-theme/components/Blocks/SearchFarmacia/schema';
export { SearchServiziProcedureSchema } from 'io-sanita-theme/components/Blocks/SearchServiziProcedure/schema';
export { TopicsListSchema } from 'io-sanita-theme/components/Blocks/TopicsList/schema';
export { CTASchema } from 'io-sanita-theme/components/Blocks/CTA/schema';
export { AlertSchema } from 'io-sanita-theme/components/Blocks/Alert/schema';
export { ContactsSchema } from 'io-sanita-theme/components/Blocks/Contacts/schema';

/*View*/
export const AccordionView = loadable(() =>
  import(
    /* webpackChunkName: "ISBlockAccordion" */ 'io-sanita-theme/components/Blocks/Accordion/View'
  ),
);
export const AlertView = loadable(() =>
  import(
    /* webpackChunkName: "ISBlockAlert" */ 'io-sanita-theme/components/Blocks/Alert/View'
  ),
);
export BreakView from 'io-sanita-theme/components/Blocks/Break/View';
export CalloutView from 'io-sanita-theme/components/Blocks/Callout/View';
export const ContactsView = loadable(() =>
  import(
    /* webpackChunkName: "ISBlockContacts" */ 'io-sanita-theme/components/Blocks/Contacts/View'
  ),
);
export const CTAView = loadable(() =>
  import(
    /* webpackChunkName: "ISBlockCTA" */ 'io-sanita-theme/components/Blocks/CTA/View'
  ),
);
export const HeroView = loadable(() =>
  import(
    /* webpackChunkName: "ISBlockHero" */ 'io-sanita-theme/components/Blocks/Hero/View'
  ),
);
export const IconsView = loadable(() =>
  import(
    /* webpackChunkName: "ISBlockIcons" */ 'io-sanita-theme/components/Blocks/Icons/View'
  ),
);
export const QuickSearchView = loadable(() =>
  import(
    /* webpackChunkName: "ISBlockSearchMap" */ 'io-sanita-theme/components/Blocks/QuickSearch/View'
  ),
);
export const SearchFarmaciaView = loadable(() =>
  import(
    /* webpackChunkName: "ISBlockSearchFarmacia" */ 'io-sanita-theme/components/Blocks/SearchFarmacia/View'
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
export const TopicsListView = loadable(() =>
  import(
    /* webpackChunkName: "ISBlockTopicsList" */ 'io-sanita-theme/components/Blocks/TopicsList/View'
  ),
);

/*Listing commons*/
export ListingImage, {
  getListingImageBackground,
} from 'io-sanita-theme/components/Blocks/Listing/commons/ListingImage';
export ListingText from 'io-sanita-theme/components/Blocks/Listing/commons/ListingText';
export RassegnaInfo from 'io-sanita-theme/components/Blocks/Listing/commons/RassegnaInfo';
export ListingContainer from 'io-sanita-theme/components/Blocks/Listing/commons/ListingContainer';

/*Listing variations*/
export CardWithImageTemplate from 'io-sanita-theme/components/Blocks/Listing/CardWithImage/CardWithImageTemplate';
export CompleteBlockLinksTemplate from 'io-sanita-theme/components/Blocks/Listing/CompleteBlockLinks/CompleteBlockLinksTemplate';
export HighlightedContentTemplate from 'io-sanita-theme/components/Blocks/Listing/HighlightedContent/HighlightedContentTemplate';
export InEvidenceTemplate from 'io-sanita-theme/components/Blocks/Listing/InEvidence/InEvidenceTemplate';
export MapTemplate from 'io-sanita-theme/components/Blocks/Listing/Map/MapTemplate';
export SimpleCardTemplate from 'io-sanita-theme/components/Blocks/Listing/SimpleCard/SimpleCardTemplate';
export SimpleListTemplate from 'io-sanita-theme/components/Blocks/Listing/SimpleList/SimpleListTemplate';
export SmallBlockLinksTemplate from 'io-sanita-theme/components/Blocks/Listing/SmallBlockLinks/SmallBlockLinksTemplate';
export CardWithSlideUpTextTemplate from 'io-sanita-theme/components/Blocks/Listing/CardWithSlideUpText/CardWithSlideUpTextTemplate';

/*Skeleton*/
export CardWithImageTemplateSkeleton from 'io-sanita-theme/components/Blocks/Listing/Skeletons/CardWithImageTemplateSkeleton';
export CompleteBlockLinksTemplateSkeleton from 'io-sanita-theme/components/Blocks/Listing/Skeletons/CompleteBlockLinksTemplateSkeleton';
export DefaultSkeleton from 'io-sanita-theme/components/Blocks/Listing/Skeletons/DefaultSkeleton';
export HighlightedContentTemplateSkeleton from 'io-sanita-theme/components/Blocks/Listing/Skeletons/HighlightedContentTemplateSkeleton';
export InEvidenceTemplateSkeleton from 'io-sanita-theme/components/Blocks/Listing/Skeletons/InEvidenceTemplateSkeleton';
export MapTemplateSkeleton from 'io-sanita-theme/components/Blocks/Listing/Skeletons/MapTemplateSkeleton';
export SimpleListTemplateSkeleton from 'io-sanita-theme/components/Blocks/Listing/Skeletons/SimpleListTemplateSkeleton';
export SmallBlockLinksTemplateSkeleton from 'io-sanita-theme/components/Blocks/Listing/Skeletons/SmallBlockLinksTemplateSkeleton';
export CardWithSlideUpTextTemplateSkeleton from 'io-sanita-theme/components/Blocks/Listing/Skeletons/CardWithSlideUpTextTemplateSkeleton';

/*Rss block (as listing)*/
export CardWithoutImageRssTemplate from 'io-sanita-theme/components/Blocks/Rss/CardWithoutImageRssTemplate';
export CardWithImageRssTemplate from 'io-sanita-theme/components/Blocks/Rss/CardWithImageRssTemplate';
export CardWithoutImageRssTemplateSkeleton from 'io-sanita-theme/components/Blocks/Rss/Skeletons/CardWithoutImageRssTemplateSkeleton';
export CardWithImageRssTemplateSkeleton from 'io-sanita-theme/components/Blocks/Rss/Skeletons/CardWithImageRssTemplateSkeleton';

/*Edit*/
const AccordionEdit = loadable(() =>
  import(
    /* webpackChunkName: "iosanita-manage" */ 'io-sanita-theme/components/Blocks/Accordion/Edit'
  ),
);
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
const ContactsEdit = loadable(() =>
  import(
    /* webpackChunkName: "iosanita-manage" */ 'io-sanita-theme/components/Blocks/Contacts/Edit'
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
const IconsEdit = loadable(() =>
  import(
    /* webpackChunkName: "iosanita-manage" */ 'io-sanita-theme/components/Blocks/Icons/Edit'
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
  AccordionEdit,
  IconsEdit,
  AlertEdit,
  BreakEdit,
  CalloutEdit,
  ContactsEdit,
  CTAEdit,
  HeroEdit,
  HTMLBlockSidebar,
  QuickSearchEdit,
  SearchFarmaciaEdit,
  SearchMapEdit,
  SearchServiziProcedureEdit,
  TopicsListEdit,
};
