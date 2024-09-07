import { defineMessages, useIntl } from 'react-intl';
import React from 'react';
import { Card, CardTitle, CardBody } from 'design-react-kit';
import PropTypes from 'prop-types';

import { viewDate } from 'io-sanita-theme/helpers';

const messages = defineMessages({
  effective: {
    id: 'bando_effective',
    defaultMessage: 'Data di pubblicazione',
  },
  apertura_bando: {
    id: 'apertura_bando',
    defaultMessage: 'Apertura del bando',
  },
  scadenza_bando: {
    id: 'scadenza_bando',
    defaultMessage: 'Scadenza dei termini per partecipare al bando',
  },
  scadenza_domande_bando: {
    id: 'scadenza_domande_bando',
    defaultMessage: 'Termine per le richieste di chiarimenti',
  },
  chiusura_procedimento_bando: {
    id: 'chiusura_procedimento_bando',
    defaultMessage: 'Chiusura del procedimento',
  },
});

/**
 * BandoDates view component class.
 * @function BandoDates
 * @params {object} Dates: object.
 * @returns {string} Markup of the component.
 */
const BandoDates = ({ content }) => {
  const intl = useIntl();

  const effective = content?.effective
    ? viewDate(intl.locale, content.effective)
    : null;

  const apertura_bando = content?.apertura_bando
    ? viewDate(intl.locale, content.apertura_bando)
    : null;

  const scadenza_domande_bando = content?.scadenza_domande_bando
    ? viewDate(intl.locale, content.scadenza_domande_bando)
    : null;

  const scadenza_bando = content?.scadenza_bando
    ? viewDate(intl.locale, content.scadenza_bando)
    : null;

  const chiusura_procedimento_bando = content?.chiusura_procedimento_bando
    ? viewDate(intl.locale, content.chiusura_procedimento_bando)
    : null;

  return content ? (
    <>
      <div className="point-list-wrapper my-4 mb-5">
        {effective && (
          <div className="point-list">
            <div className="point-list-aside point-list-primary fw-normal">
              <span className="point-date font-monospace">
                {effective.format('DD')}
              </span>
              <span className="point-month">{effective.format('MMMM')}</span>
              <span className="point-month">{effective.format('Y')}</span>
            </div>
            <div className="point-list-content">
              <Card className="card-teaser rounded shadow" noWrapper={true}>
                <CardBody>
                  <CardTitle tag="p" className="mb-0 h5">
                    {intl.formatMessage(messages.effective)}
                  </CardTitle>
                </CardBody>
              </Card>
            </div>
          </div>
        )}

        {apertura_bando && (
          <div className="point-list">
            <div className="point-list-aside point-list-primary fw-normal">
              <span className="point-date font-monospace">
                {apertura_bando.format('DD')}
              </span>
              <span className="point-month">
                {apertura_bando.format('MMMM')}
              </span>
              <span className="point-month">{apertura_bando.format('Y')}</span>
            </div>
            <div className="point-list-content">
              <Card className="card-teaser rounded shadow" noWrapper={true}>
                <CardBody>
                  <CardTitle tag="p" className="mb-0 h5">
                    {`${apertura_bando.format('HH:mm')} - `}
                    {intl.formatMessage(messages.apertura_bando)}
                  </CardTitle>
                </CardBody>
              </Card>
            </div>
          </div>
        )}

        {scadenza_domande_bando && (
          <div className="point-list">
            <div className="point-list-aside point-list-primary fw-normal">
              <span className="point-date font-monospace">
                {scadenza_domande_bando.format('DD')}
              </span>
              <span className="point-month">
                {scadenza_domande_bando.format('MMMM')}
              </span>
              <span className="point-month">
                {scadenza_domande_bando.format('Y')}
              </span>
            </div>
            <div className="point-list-content">
              <Card className="card-teaser rounded shadow" noWrapper={true}>
                <CardBody>
                  <CardTitle tag="p" className="mb-0 h5">
                    {`${scadenza_domande_bando.format('HH:mm')} - `}
                    {intl.formatMessage(messages.scadenza_domande_bando)}
                  </CardTitle>
                </CardBody>
              </Card>
            </div>
          </div>
        )}

        {scadenza_bando && (
          <div className="point-list">
            <div className="point-list-aside point-list-primary fw-normal">
              <span className="point-date font-monospace">
                {scadenza_bando.format('DD')}
              </span>
              <span className="point-month">
                {scadenza_bando.format('MMMM')}
              </span>
              <span className="point-month">{scadenza_bando.format('Y')}</span>
            </div>
            <div className="point-list-content">
              <Card className="card-teaser rounded shadow" noWrapper={true}>
                <CardBody>
                  <CardTitle tag="p" className="mb-0 h5">
                    {`${scadenza_bando.format('HH:mm')} - `}
                    {intl.formatMessage(messages.scadenza_bando)}
                  </CardTitle>
                </CardBody>
              </Card>
            </div>
          </div>
        )}

        {chiusura_procedimento_bando && (
          <div className="point-list">
            <div className="point-list-aside point-list-primary fw-normal">
              <span className="point-date font-monospace">
                {chiusura_procedimento_bando.format('DD')}
              </span>
              <span className="point-month">
                {chiusura_procedimento_bando.format('MMMM')}
              </span>
              <span className="point-month">
                {chiusura_procedimento_bando.format('Y')}
              </span>
            </div>
            <div className="point-list-content">
              <Card className="card-teaser rounded shadow" noWrapper={true}>
                <CardBody>
                  <CardTitle tag="p" className="mb-0 h5">
                    {intl.formatMessage(messages.chiusura_procedimento_bando)}
                  </CardTitle>
                </CardBody>
              </Card>
            </div>
          </div>
        )}
      </div>
    </>
  ) : null;
};

export default BandoDates;

BandoDates.propTypes = {
  content: PropTypes.object.isRequired,
};
