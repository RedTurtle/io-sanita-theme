import UniversalLink from '@plone/volto/components/manage/UniversalLink/UniversalLink';
import { PuntoDiContattoValue } from 'io-sanita-theme/helpers';
import { defineMessages, useIntl } from 'react-intl';
import { Table } from 'semantic-ui-react';
import { getActiveTurni } from './turniUtils';

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
    defaultMessage: 'Telefono',
  },
  recapiti_en: {
    id: 'search_farmacia_table_recapiti_en',
    defaultMessage: 'Phone number',
  },
  turni: {
    id: 'search_farmacia_table_turni',
    defaultMessage: 'Periodo e tipologia di turno',
  },
  turni_en: {
    id: 'search_farmacia_table_turni_en',
    defaultMessage: 'Shift periods and type',
  },
  turni_no_tipo: {
    id: 'search_farmacia_table_turni_no_tipo',
    defaultMessage: 'Periodo di turno',
  },
  turni_no_tipo_en: {
    id: 'search_farmacia_table_turni_no_tipo_en',
    defaultMessage: 'Shift periods',
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
  no_results: {
    id: 'search_farmacia_no_results',
    defaultMessage: 'Nessun risultato trovato',
  },
});

const ContactColumns = ({
  isEditMode,
  item,
  searchType,
  showCap,
  showProvincia,
  showLocalitaColonna,
}) => {
  const intl = useIntl();
  const showZip = showCap && item?.zip_code;
  const showProv = showProvincia && item?.provincia;
  const hasSecondAddressLine = showZip || item?.localita || showProv;

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

      {showLocalitaColonna && (
        <td className="localita">
          <div className="th d-lg-none">
            {intl.formatMessage(messages.localita)}
            <br />
            {intl.formatMessage(messages.localita_en)}
          </div>

          {item?.localita ? <p>{item.localita}</p> : <> - </>}
        </td>
      )}

      <td className="indirizzo">
        <div className="th d-lg-none">
          {intl.formatMessage(messages.indirizzo)}
          <br />
          {intl.formatMessage(messages.indirizzo_en)}
        </div>

        {item?.street || hasSecondAddressLine ? (
          <p>
            {item?.street && item.street}
            {item?.street && hasSecondAddressLine && <br />}
            {showZip && item.zip_code}
            {showZip && item?.localita && <> </>}
            {item?.localita && item.localita}
            {showProv && <> ({item.provincia}) </>}
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
            <PuntoDiContattoValue
              value={{ tipo: 'telefono', valore: item.telefono }}
            />
          </p>
        )}
        {item.telefono_turno && searchType !== 'vacations' && (
          <p className="my-0">
            <PuntoDiContattoValue
              value={{ tipo: 'telefono', valore: item.telefono_turno }}
            />
          </p>
        )}
      </td>
    </>
  );
};

const PeriodsStructure = ({ periods, showTipoTurno }) => {
  const intl = useIntl();
  return (
    <p>
      {periods?.length > 0 ? (
        periods.map((pd, i) => (
          <span key={i}>
            {intl.formatMessage(messages.period_from)}
            {pd?.dal && <> {pd.dal} </>}
            {intl.formatMessage(messages.period_to) + ' '}
            {pd?.al && <>{pd.al}</>}
            {showTipoTurno && pd?.tipo_turno && <> – {pd.tipo_turno}</>}
            <br />
          </span>
        ))
      ) : (
        <>-</>
      )}
    </p>
  );
};

const Results = ({
  items,
  isEditMode,
  searchType,
  onlyActiveTurno,
  searchDate,
  showCap,
  showProvincia,
  showLocalitaColonna,
  showTipoTurno,
}) => {
  const intl = useIntl();

  return (
    <>
      {items?.length > 0 ? (
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
              {showLocalitaColonna && (
                <Table.HeaderCell>
                  {intl.formatMessage(messages.localita)}
                  <br />
                  {intl.formatMessage(messages.localita_en)}
                </Table.HeaderCell>
              )}
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
                  {intl.formatMessage(
                    showTipoTurno ? messages.turni : messages.turni_no_tipo,
                  )}
                  <br />
                  {intl.formatMessage(
                    showTipoTurno
                      ? messages.turni_en
                      : messages.turni_no_tipo_en,
                  )}
                </Table.HeaderCell>
              )}
            </Table.Row>
          </Table.Header>
          <tbody>
            {items.map((item, i) => {
              const turniDaMostrare =
                onlyActiveTurno && searchDate
                  ? getActiveTurni(item.turni, searchDate)
                  : item.turni;

              return (
                <tr key={i}>
                  <td className="nome">
                    <p>
                      {item['@id'] ? (
                        <UniversalLink
                          item={!isEditMode ? item : null}
                          href={isEditMode ? '#' : null}
                        >
                          {item.title}
                        </UniversalLink>
                      ) : (
                        item.title
                      )}
                    </p>
                  </td>
                  <ContactColumns
                    isEditMode={isEditMode}
                    item={item}
                    searchType={searchType}
                    showCap={showCap}
                    showProvincia={showProvincia}
                    showLocalitaColonna={showLocalitaColonna}
                  />

                  {/* Periodo e tipologia di turno */}
                  {searchType !== 'vacations' && (
                    <td className="turni">
                      <div className="th d-lg-none">
                        {intl.formatMessage(
                          showTipoTurno
                            ? messages.turni
                            : messages.turni_no_tipo,
                        )}
                        <br />
                        {intl.formatMessage(
                          showTipoTurno
                            ? messages.turni_en
                            : messages.turni_no_tipo_en,
                        )}
                      </div>
                      <PeriodsStructure
                        periods={turniDaMostrare}
                        showTipoTurno={showTipoTurno}
                      />
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
              );
            })}
          </tbody>
        </Table>
      ) : (
        <div className="message px-4">
          {intl.formatMessage(messages.no_results)}
        </div>
      )}
    </>
  );
};

export default Results;
