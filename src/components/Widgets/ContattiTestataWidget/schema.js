import { defaultIconWidgetOptions } from 'io-sanita-theme/components/Widgets';

const schema = () => {
  return {
    title: 'contatti in testata',
    fieldsets: [
      {
        id: 'contatti_testata',
        fields: ['description', 'tag', 'value_link', 'icon'],
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
      value_link: {
        title: 'Link',
        widget: 'richtext',
        type: 'string',
        description:
          "Campo link: Accetta link interni ed esterni, email o numeri di telefono. Devono essere creati utilizzando lo strumento di collegamento dell'editor del campo",
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
