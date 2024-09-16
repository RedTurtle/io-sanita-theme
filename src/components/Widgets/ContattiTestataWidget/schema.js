import { defaultIconWidgetOptions } from 'io-sanita-theme/components/Widgets';

const schema = () => {
  return {
    title: 'contatti in testata',
    fieldsets: [
      {
        id: 'contatti_testata',
        fields: ['description', 'tag', 'link_value', 'icon'],
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
      link_value: {
        title: 'Link',
        description:
          "Campo link: Accetta link interni ed esterni, email o numeri di telefono. Devono essere creati utilizzando lo strumento di collegamento dell'editor del campo",
        type: 'string',
        widget: 'richtext',
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
