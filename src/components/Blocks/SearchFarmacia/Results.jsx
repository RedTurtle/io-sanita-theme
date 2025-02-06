import UniversalLink from '@plone/volto/components/manage/UniversalLink/UniversalLink';
import { PuntoDiContattoValue } from 'io-sanita-theme/helpers';
import { defineMessages, useIntl } from 'react-intl';
import { Table } from 'semantic-ui-react';

const messages = defineMessages({
  nome: {
    id: 'search_farmacia_table_nome',
    defaultMessage: 'Denominazione Farmacia',
  },
  nome_en: {
    id: 'search_farmacia_table_nome_en',
    defaultMessage: 'Pharmacy name',
  },
  comune: {
    id: 'search_farmacia_table_comune',
    defaultMessage: 'Comune',
  },
  comune_en: {
    id: 'search_farmacia_table_comune_en',
    defaultMessage: 'Municipality',
  },
  localita: {
    id: 'search_farmacia_table_localita',
    defaultMessage: 'Località',
  },
  localita_en: {
    id: 'search_farmacia_table_localita_en',
    defaultMessage: 'Locality',
  },
  indirizzo: {
    id: 'search_farmacia_table_indirizzo',
    defaultMessage: 'Indirizzo',
  },
  indirizzo_en: {
    id: 'search_farmacia_table_indirizzo_en',
    defaultMessage: 'Address',
  },
  recapiti: {
    id: 'search_farmacia_table_recapiti',
    defaultMessage: 'Recapiti',
  },
  recapiti_en: {
    id: 'search_farmacia_table_recapiti_en',
    defaultMessage: 'Contact numbers',
  },
  turni: {
    id: 'search_farmacia_table_turni',
    defaultMessage: 'Periodi di Turno',
  },
  turni_en: {
    id: 'search_farmacia_table_turni_en',
    defaultMessage: 'Shifts periods',
  },
  ferie: {
    id: 'search_farmacia_table_ferie',
    defaultMessage: 'Periodi di Ferie',
  },
  ferie_en: {
    id: 'search_farmacia_table_ferie_en',
    defaultMessage: 'Vacations',
  },
  period_from: {
    id: 'search_farmacia_period_from',
    defaultMessage: 'Dal',
  },
  period_to: {
    id: 'search_farmacia_period_to',
    defaultMessage: 'al',
  },
  telefono: {
    id: 'search_farmacia_telefono',
    defaultMessage: 'Telefono',
  },
  telefono_turno: {
    id: 'search_farmacia_telefono_turno',
    defaultMessage: 'Telefono turno',
  },
  no_results: {
    id: 'search_farmacia_no_results',
    defaultMessage: 'Nessun risultato trovato',
  },
  farmacie_results_aria: {
    id: 'search_farmacia_results_aria',
    defaultMessage: 'Risultati della ricerca farmacie',
  },
});

const ContactColumns = ({ isEditMode, item, searchType }) => {
  const intl = useIntl();

  return (
    <>
      <td className="comune">
        <div className="th d-lg-none">
          {intl.formatMessage(messages.comune)}
          <br />
          {intl.formatMessage(messages.comune_en)}
        </div>

        {item?.comune ? <p>{item.comune}</p> : <> - </>}
      </td>

      <td className="localita">
        <div className="th d-lg-none">
          {intl.formatMessage(messages.localita)}
          <br />
          {intl.formatMessage(messages.localita_en)}
        </div>

        {item?.localita ? <p>{item.localita}</p> : <> - </>}
      </td>

      <td className="indirizzo">
        <div className="th d-lg-none">
          {intl.formatMessage(messages.indirizzo)}
          <br />
          {intl.formatMessage(messages.indirizzo_en)}
        </div>

        {item?.street || item?.zip_code || item?.localita || item?.provincia ? (
          <p>
            {item?.street && item.street}
            {item?.street && item?.zip_code && <br />}
            {item?.zip_code && item.zip_code}
            {item?.zip_code && item?.localita && <> </>}
            {item?.localita && item.localita}
            {item?.provincia && <> ({item.provincia}) </>}
          </p>
        ) : (
          <> - </>
        )}
      </td>

      {/* Recapiti */}
      <td className="recapiti">
        <div className="th d-lg-none">
          {intl.formatMessage(messages.recapiti)}
        </div>
        {item.telefono && searchType === 'vacations' && (
          <p className="my-0">
            {`${intl.formatMessage(messages.telefono)}: `}
            <PuntoDiContattoValue
              value={{ tipo: 'telefono', valore: item.telefono }}
            />
          </p>
        )}
        {item.telefono_turno && searchType !== 'vacations' && (
          <p className="my-0">
            {`${intl.formatMessage(messages.telefono_turno)}: `}
            <PuntoDiContattoValue
              value={{ tipo: 'telefono', valore: item.telefono_turno }}
            />
          </p>
        )}
      </td>
    </>
  );
};

const PeriodsStructure = ({ periods }) => {
  const intl = useIntl();
  return (
    <p>
      {periods?.length > 0 ? (
        periods.map((pd, i) => (
          <span key={i}>
            {intl.formatMessage(messages.period_from)}
            {pd?.dal && <> {pd.dal} </>}
            {intl.formatMessage(messages.period_to) + ' '}
            {pd?.al && (
              <>
                {pd.al}
                <br />
              </>
            )}
          </span>
        ))
      ) : (
        <>-</>
      )}
    </p>
  );
};

const Results = ({ items, isEditMode, resRef, searchType }) => {
  const intl = useIntl();

  return (
    <>
      {items?.length > 0 ? (
        <div
          className="farmacie-results shadow"
          role="region"
          aria-live="polite"
          aria-label={intl.formatMessage(messages.farmacie_results_aria)}
          ref={resRef}
        >
          <Table>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>
                  {intl.formatMessage(messages.nome)} <br />
                  {intl.formatMessage(messages.nome_en)}
                </Table.HeaderCell>
                <Table.HeaderCell>
                  {intl.formatMessage(messages.comune)} <br />
                  {intl.formatMessage(messages.comune_en)}
                </Table.HeaderCell>
                <Table.HeaderCell>
                  {intl.formatMessage(messages.localita)}
                  <br />
                  {intl.formatMessage(messages.localita_en)}
                </Table.HeaderCell>
                <Table.HeaderCell>
                  {intl.formatMessage(messages.indirizzo)}
                  <br />
                  {intl.formatMessage(messages.indirizzo_en)}
                </Table.HeaderCell>
                <Table.HeaderCell>
                  {intl.formatMessage(messages.recapiti)}
                  <br />
                  {intl.formatMessage(messages.recapiti_en)}
                </Table.HeaderCell>

                {searchType === 'vacations' ? (
                  <>
                    <Table.HeaderCell>
                      {intl.formatMessage(messages.ferie)}
                      <br />
                      {intl.formatMessage(messages.ferie_en)}
                    </Table.HeaderCell>
                  </>
                ) : (
                  <Table.HeaderCell>
                    {intl.formatMessage(messages.turni)}
                    <br />
                    {intl.formatMessage(messages.turni_en)}
                  </Table.HeaderCell>
                )}
              </Table.Row>
            </Table.Header>
            <tbody>
              {items.map((item, i) => (
                <tr key={i}>
                  <td className="nome">
                    {item['@id'] && (
                      <p>
                        <UniversalLink
                          item={!isEditMode ? item : null}
                          href={isEditMode ? '#' : null}
                        >
                          {item.title}
                        </UniversalLink>
                      </p>
                    )}
                  </td>
                  <ContactColumns
                    isEditMode={isEditMode}
                    item={item}
                    searchType={searchType}
                  />

                  {/* Periodi di turno */}
                  {searchType !== 'vacations' && (
                    <td className="turni">
                      <div className="th d-lg-none">
                        {intl.formatMessage(messages.turni)}
                        <br />
                        {intl.formatMessage(messages.turni_en)}
                      </div>
                      <PeriodsStructure periods={item.turni} />
                    </td>
                  )}

                  {/* Periodi di ferie */}
                  {searchType === 'vacations' && (
                    <td className="ferie">
                      <div className="th d-lg-none">
                        {intl.formatMessage(messages.ferie)}
                        <br />
                        {intl.formatMessage(messages.ferie_en)}
                      </div>
                      <PeriodsStructure periods={item.ferie} />
                    </td>
                  )}
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      ) : (
        <div className="message px-4">
          {intl.formatMessage(messages.no_results)}
        </div>
      )}
    </>
  );
};

export default Results;
