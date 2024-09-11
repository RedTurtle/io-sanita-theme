import { defaultIconWidgetOptions } from 'io-sanita-theme/components/Widgets';

const schema = () => {
  return {
    title: 'contatti in testata',
    fieldsets: [
      {
        id: 'contatti_testata',
        fields: ['description', 'tag', 'href', 'icon'],
        title: 'contatti_testata',
      },
    ],
    properties: {
      description: {
        title: 'Descrizione',
      },
      tag: {
        title: 'Etichetta',
      },
      href: {
        title: 'link',
        widget: 'object_browser',
        mode: 'link',
        allowExternals: true,
      },
      icon: {
        title: 'Escolha um ícone',
        description: 'Selecione ou insira um ícone de FontAwesome.',
        widget: 'iconWidget',
        defaultOptions: defaultIconWidgetOptions,
      },
    },
    required: [],
  };
};

export default schema;
