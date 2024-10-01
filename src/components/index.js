import loadable from '@loadable/component';

export Icon from 'io-sanita-theme/components/Icon/Icon';
export FontAwesomeIcon from 'io-sanita-theme/components/Icon/FontAwesomeIcon';

//commons
export RemoveBodyClass from 'io-sanita-theme/components/layout/RemoveBodyClass';
export const Unauthorized = loadable(() =>
  import('io-sanita-theme/components/Unauthorized/Unauthorized'),
);

//Login
export const LoginAgid = loadable(() =>
  import(
    /* webpackChunkName: "is-login" */ 'io-sanita-theme/components/LoginAgid/LoginAgid'
  ),
);
export const LoginAgidButtons = loadable(() =>
  import(
    /* webpackChunkName: "is-login" */ 'io-sanita-theme/components/LoginAgid/LoginAgidButtons'
  ),
);
//layout
export SkipLinks from 'io-sanita-theme/components/SkipLinks/SkipLinks';
export Breadcrumbs from 'io-sanita-theme/components/Breadcrumbs/Breadcrumbs';
export HandleAnchor from 'io-sanita-theme/components/AppExtras/HandleAnchor';
export GenericAppExtras from 'io-sanita-theme/components/AppExtras/GenericAppExtras';
export SiteSettingsExtras from 'io-sanita-theme/components/AppExtras/SiteSettingsExtras';
export PageLoader from 'io-sanita-theme/components/AppExtras/PageLoader';
export ScrollToTop from 'io-sanita-theme/components/ScrollToTop/ScrollToTop';

//Header
export HeaderSlim from 'io-sanita-theme/components/layout/Header/HeaderSlim/HeaderSlim';
export HeaderContacts from 'io-sanita-theme/components/layout/Header/HeaderContacts/HeaderContacts';
export HeaderCenter from 'io-sanita-theme/components/layout/Header/HeaderCenter';
export SubsiteHeader from 'io-sanita-theme/components/layout/Header/SubsiteHeader';
export SearchModal from 'io-sanita-theme/components/layout/Header/HeaderSearch/SearchModal';
export UserLoggedMenu from 'io-sanita-theme/components/layout/Header/HeaderSlim/UserLoggedMenu';
export LoginButton from 'io-sanita-theme/components/layout/Header/HeaderSlim/LoginButton';
export HeaderSlimRightZone from 'io-sanita-theme/components/layout/Header/HeaderSlim/HeaderSlimRightZone';
export ParentSiteMenu from 'io-sanita-theme/components/layout/Header/HeaderSlim/ParentSiteMenu';
export LanguageSelector from 'io-sanita-theme/components/layout/Header/LanguageSelector';
export HeaderLogin from 'io-sanita-theme/components/layout/Header/HeaderSlim/HeaderLogin';
export TertiaryMenu from 'io-sanita-theme/components/layout/Header/HeaderSlim/TertiaryMenu';
export SocialHeader from 'io-sanita-theme/components/layout/Header/SocialHeader';
export HeaderSearch from 'io-sanita-theme/components/layout/Header/HeaderSearch/HeaderSearch';

//Footer
export LogoFooter from 'io-sanita-theme/components/LogoFooter/LogoFooter';
export BrandTextFooter from 'io-sanita-theme/components/BrandTextFooter/BrandTextFooter';
export FooterMain from 'io-sanita-theme/components/layout/Footer/FooterMain';
export FooterNavigation from 'io-sanita-theme/components/layout/Footer/FooterNavigation';
export FooterInfos from 'io-sanita-theme/components/layout/Footer/FooterInfos';
export FooterNewsletterSubscribe from 'io-sanita-theme/components/layout/Footer/FooterInfos';
export FooterSocials from 'io-sanita-theme/components/layout/Footer/FooterSocials';
export FooterSmall from 'io-sanita-theme/components/layout/Footer/FooterSmall';
export SubsiteFooter from 'io-sanita-theme/components/layout/Footer/SubsiteFooter';

//Menu
export CollapseNavigation from 'io-sanita-theme/components/layout/Navigation/CollapseNavigation';
export MegaMenu from 'io-sanita-theme/components/layout/Navigation/MegaMenu/MegaMenu';
export MenuSecondary from 'io-sanita-theme/components/layout/Navigation/MenuSecondary/MenuSecondary';

//Logo and Brand
export Logo from 'io-sanita-theme/components/Logo/Logo';
export BrandText from 'io-sanita-theme/components/BrandText/BrandText';
export BrandWrapper from 'io-sanita-theme/components/BrandWrapper/BrandWrapper';

//Search
export QuickSearch from 'io-sanita-theme/components/Search/common/QuickSearch';

export const SearchResultItem = loadable(() =>
  import(
    /* webpackChunkName: "is-search" */ 'io-sanita-theme/components/Search/common/SearchResultItem'
  ),
);
//Widgets
export const Checkbox = loadable(() =>
  import('io-sanita-theme/components/Widgets/Checkbox/Checkbox'),
);
export const FileWidget = loadable(() =>
  import('io-sanita-theme/components/Widgets/FileWidget'),
);

export const SelectInput = loadable(() =>
  import('io-sanita-theme/components/Widgets/SelectInput/SelectInput'),
);

//Search widgets
export const SortByWidget = loadable(() =>
  import(
    /* webpackChunkName: "is-search" */ 'io-sanita-theme/components/Widgets/SortByWidget/SortByWidget'
  ),
);
export const SearchBar = loadable(() =>
  import(
    /* webpackChunkName: "is-search" */ 'io-sanita-theme/components/Widgets/SearchBar/SearchBar'
  ),
);
export const SearchCheckbox = loadable(() =>
  import(
    /* webpackChunkName: "is-search" */ 'io-sanita-theme/components/Widgets/SearchCheckbox'
  ),
);
export const SearchSections = loadable(() =>
  import(
    /* webpackChunkName: "is-search" */ 'io-sanita-theme/components/Widgets/SearchSections/SearchSections'
  ),
);

//Cards
export CardCategoryTop from 'io-sanita-theme/components/Cards/common/CardCategoryTop';
export CardCategoryBottom from 'io-sanita-theme/components/Cards/common/CardCategoryBottom';
export CardFeatured from 'io-sanita-theme/components/Cards/CardFeatured/CardFeatured';
export CardImage from 'io-sanita-theme/components/Cards/CardImage/CardImage';
export CardGhost from 'io-sanita-theme/components/Cards/CardGhost/CardGhost';
export CardPlace from 'io-sanita-theme/components/Cards/CardPlace/CardPlace';
export CardPersona from 'io-sanita-theme/components/Cards/CardPersona/CardPersona';
export CardFile from 'io-sanita-theme/components/Cards/CardFile/CardFile';
export CardGuide from 'io-sanita-theme/components/Cards/CardGuide/CardGuide';
export CardSimple from 'io-sanita-theme/components/Cards/CardSimple/CardSimple';
export CardContatti from 'io-sanita-theme/components/Cards/CardContatti/CardContatti';

//Pagination
export Pagination from 'io-sanita-theme/components/Pagination/Pagination';

//Gallery e Slider
export const GalleryPreview = loadable(() =>
  import(
    /* webpackChunkName: "is-search-gallery" */ 'io-sanita-theme/components/GalleryPreview/GalleryPreview'
  ),
);
export const ButtonPlayPause = loadable(() =>
  import(
    /* webpackChunkName: "is-search-gallery" */ 'io-sanita-theme/components/Slider/ButtonPlayPause'
  ),
);
export const CarouselWrapper = loadable(() =>
  import(
    /* webpackChunkName: "is-search-gallery" */ 'io-sanita-theme/components/Slider/CarouselWrapper'
  ),
);
export const NextArrow = loadable(() =>
  import(
    /* webpackChunkName: "is-search-gallery" */ 'io-sanita-theme/components/Slider/NextArrow'
  ),
);
export const PrevArrow = loadable(() =>
  import(
    /* webpackChunkName: "is-search-gallery" */ 'io-sanita-theme/components/Slider/PrevArrow'
  ),
);
export const SingleSlideWrapper = loadable(() =>
  import(
    /* webpackChunkName: "is-search-gallery" */ 'io-sanita-theme/components/Slider/SingleSlideWrapper'
  ),
);
export const SliderContainer = loadable(() =>
  import(
    /* webpackChunkName: "is-search-gallery" */ 'io-sanita-theme/components/Slider/SliderContainer'
  ),
);
export { useSlider } from 'io-sanita-theme/components/Slider/slider';

//Commons
export const EmbeddedVideo = loadable(() =>
  import(
    /* webpackChunkName: "is-video" */ 'io-sanita-theme/components/EmbeddedVideo/EmbeddedVideo'
  ),
);
