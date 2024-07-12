/**
 * AggregationPage view component.
 * @module components/theme/View/AggregationPage
 */

import React, { createRef, useState, useEffect } from 'react';
import { defineMessages, useIntl } from 'react-intl';
import PropTypes from 'prop-types';
import { Helmet } from '@plone/volto/helpers';
import {
  PageHeader,
  SkipToMainContent,
} from 'io-sanita-theme/components/View/commons';
import { SideMenu } from 'io-sanita-theme/components/View/AggregationPage';

import config from '@plone/volto/registry';

const messages = defineMessages({
  description_argument: {
    id: 'aggregation_page_description_argument',
    defaultMessage: 'Tutti i contenuti relativi all\'argomento "{title}"',
  },
  description_tipologia_utente: {
    id: 'aggregation_page_description_tipologia_utente',
    defaultMessage: 'Tutti i contenuti dedicati a "{title}"',
  },
  all_contents: {
    id: 'aggregation_page_all',
    defaultMessage: 'Tutti',
  },
});

/**
 * AggregationPage view component class.
 * @function AggregationPage
 * @params {object} content Content object.
 * @returns {string} Markup of the component.
 */
const AggregationPage = ({ match, route }) => {
  const intl = useIntl();
  const id = match?.params?.id ?? '';
  const type = route?.type;

  const title = id.charAt(0).toUpperCase() + id.slice(1);
  const description = intl.formatMessage(
    type === 'TipologiaUtente'
      ? messages.description_tipologia_utente
      : messages.description_argument,
    {
      title: title,
    },
  );

  let documentBody = createRef();

  const defaultSections = [
    {
      id: 'tutti',
      title: intl.formatMessage(messages.all_contents),
      type: null,
    },
  ];
  const [sections, setSections] = useState(defaultSections);

  useEffect(() => {
    //ToDo: qui vanno caricati i risultati per 'tutti' come default, e vanno aggiunte le sections in base ai tipi disponibili ritornati dalla prima ricerca
  }, [id, type]);
  return (
    <>
      <Helmet title={title} />
      <div className="container px-4 my-4 aggregation-page-view">
        <SkipToMainContent />
        <PageHeader content={{ title: title, description: description }} />

        <div className="row row-column-menu-left">
          <aside className="col-md-12 col-lg-4">
            {__CLIENT__ && <SideMenu sections={sections} />}
          </aside>
          <section
            ref={documentBody}
            id="main-content-section"
            className="col-lg-8 aggregation-page-results"
          >
            results
          </section>
        </div>
      </div>
    </>
  );
};

export default AggregationPage;
