import type { ConfigType } from '@plone/registry';
import { FeedbackForm } from 'volto-feedback-italia';
import Icon from 'io-sanita-theme/components/Icon/Icon';
import ImageWithErrors from 'io-sanita-theme/components/ImageWithErrors/ImageWithErrors';
import Pagination from 'io-sanita-theme/components/Pagination/Pagination';
import RichTextSection from 'io-sanita-theme/helpers/RichText/RichTextSection';
import SelectInput from 'io-sanita-theme/components/Widgets/SelectInput/SelectInput';
import SideMenu from 'io-sanita-theme/components/View/commons/SideMenu/SideMenu';
import SiteSettingsExtras from 'io-sanita-theme/components/AppExtras/SiteSettingsExtras';
import SkipToMainContent from 'io-sanita-theme/components/View/commons/SkipToMainContent';

export default function applyComponentConfig(config: ConfigType) {
  config.components = {
    ...config.components,
    BlockExtraTags: { component: () => null },
    Image: {
      // @ts-expect-error
      component: ImageWithErrors,
    },
  };

  config.registerComponent({
    name: 'FeedbackForm',
    component: FeedbackForm,
  });

  config.registerComponent({
    name: 'Icon',
    component: Icon,
  });

  config.registerComponent({
    name: 'Pagination',
    component: Pagination,
  });

  config.registerComponent({
    name: 'RichTextSection',
    // @ts-expect-error
    component: RichTextSection,
  });

  config.registerComponent({
    name: 'SelectInput',
    component: SelectInput,
  });

  config.registerComponent({
    name: 'SideMenu',
    // @ts-expect-error
    component: SideMenu,
  });

  config.registerComponent({
    name: 'SiteSettingsExtras',
    component: SiteSettingsExtras,
  });

  config.registerComponent({
    name: 'SkipToMainContent',
    component: SkipToMainContent,
  });

  return config;
}
