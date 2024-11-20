import React, { useState, useEffect } from 'react';
import { useIntl, defineMessages } from 'react-intl';
import { injectLazyLibs } from '@plone/volto/helpers/Loadable/Loadable';
import { Icon } from 'io-sanita-theme/components';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';

const messages = defineMessages({
  start_date: {
    id: 'daterange_start',
    defaultMessage: 'Data inizio',
  },
  end_date: {
    id: 'daterange_end',
    defaultMessage: 'Data fine',
  },

  calendarLabel: {
    id: 'dateRangePicker_calendarLabel',
    defaultMessage: 'Calendario',
  },
  roleDescription: {
    id: 'dateRangePicker_roleDescription',
    defaultMessage: 'Seleziona date',
  },
  closeDatePicker: {
    id: 'dateRangePicker_closeDatePicker',
    defaultMessage: 'Chiudi',
  },
  focusStartDate: {
    id: 'dateRangePicker_focusStartDate',
    defaultMessage:
      'Interagisci con il calendario e seleziona le date di inizio e/o fine',
  },
  clearDate: {
    id: 'dateRangePicker_clearDate',
    defaultMessage: 'Cancella la data',
  },
  clearDates: {
    id: 'dateRangePicker_clearDates',
    defaultMessage: 'Cancella le date',
  },
  jumpToPrevMonth: {
    id: 'dateRangePicker_jumpToPrevMonth',
    defaultMessage: 'Torna indietro per passare al mese precedente',
  },
  jumpToNextMonth: {
    id: 'dateRangePicker_jumpToNextMonth',
    defaultMessage: 'Via avanti per passare al mese successivo',
  },
  keyboardShortcuts: {
    id: 'dateRangePicker_keyboardShortcuts',
    defaultMessage: 'Tasti rapidi',
  },
  showKeyboardShortcutsPanel: {
    id: 'dateRangePicker_showKeyboardShortcutsPanel',
    defaultMessage: 'Apri il pannello dei tasti rapidi',
  },
  hideKeyboardShortcutsPanel: {
    id: 'dateRangePicker_hideKeyboardShortcutsPanel',
    defaultMessage: 'Chiudi il pannello dei tasti rapidi',
  },
  openThisPanel: {
    id: 'dateRangePicker_openThisPanel',
    defaultMessage: 'Apri questo pannello.',
  },
  enterKey: {
    id: 'dateRangePicker_enterKey',
    defaultMessage: 'Tasto invio',
  },
  leftArrowRightArrow: {
    id: 'dateRangePicker_leftArrowRightArrow',
    defaultMessage: 'Tasti freccia destra e sinistra',
  },
  upArrowDownArrow: {
    id: 'dateRangePicker_upArrowDownArrow',
    defaultMessage: 'Tasti freccia su e giu',
  },
  pageUpPageDown: {
    id: 'dateRangePicker_pageUpPageDown',
    defaultMessage: 'Tasti pagina su e giu',
  },
  homeEnd: {
    id: 'dateRangePicker_homeEnd',
    defaultMessage: 'Tasti inizio e fine',
  },
  escape: {
    id: 'dateRangePicker_escape',
    defaultMessage: 'Tasto Esc',
  },
  questionMark: {
    id: 'dateRangePicker_questionMark',
    defaultMessage: 'Punto interrogativo',
  },
  selectFocusedDate: {
    id: 'dateRangePicker_selectFocusedDate',
    defaultMessage: 'Seleziona la data evidenziata',
  },
  moveFocusByOneDay: {
    id: 'dateRangePicker_moveFocusByOneDay',
    defaultMessage:
      'Spostati indietro (sinistra) e avanti (destra) di un giorno.',
  },
  moveFocusByOneWeek: {
    id: 'dateRangePicker_moveFocusByOneWeek',
    defaultMessage: 'Spostati indietro (su) e avanti (giu) di una settimana.',
  },
  moveFocusByOneMonth: {
    id: 'dateRangePicker_moveFocusByOneMonth',
    defaultMessage: 'Cambia mese',
  },
  moveFocustoStartAndEndOfWeek: {
    id: 'dateRangePicker_moveFocustoStartAndEndOfWeek',
    defaultMessage: "Vai al primo o all'ultimo giorno della settimana",
  },
  returnFocusToInput: {
    id: 'dateRangePicker_returnFocusToInput',
    defaultMessage: 'Torna al campo di inserimento data',
  },
  keyboardForwardNavigationInstructions: {
    id: 'dateRangePicker_keyboardForwardNavigationInstructions',
    defaultMessage:
      "Naviga avanti per interagire con il calendario e selezionare una data. Premi il pulsante 'punto interrogativo' per conoscere i tasti rapidi per modificare le date.",
  },
  keyboardBackwardNavigationInstructions: {
    id: 'dateRangePicker_keyboardBackwardNavigationInstructions',
    defaultMessage:
      "Naviga indietro per interagire con il calendario e selezionare una data. Premi il pulsante 'punto interrogativo' per conoscere i tasti rapidi per modificare le date.",
  },
  choose: {
    id: 'dateRangePicker_choose',
    defaultMessage: 'Scegli',
  },
});

const PrevIcon = () => (
  <div
    className="prev-icon"
    style={{
      color: '#000',
      left: '22px',
      padding: '5px',
      position: 'absolute',
      top: '15px',
    }}
    // eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex
    tabIndex="0"
  >
    <Icon icon="it-chevron-left" size="30px" />
  </div>
);
const NextIcon = () => (
  <div
    className="next-icon"
    style={{
      color: '#000',
      right: '22px',
      padding: '5px',
      position: 'absolute',
      top: '15px',
    }}
    // eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex
    tabIndex="0"
  >
    <Icon icon="it-chevron-right" size="30px" />
  </div>
);

const customArrowIcon = (props) => {
  const { intl } = props;
  return (
    <Icon icon="it-arrow-right" title={intl.formatMessage(messages.end_date)} />
  );
};

const CloseIcon = (props) => {
  const { intl } = props;
  return (
    <Icon
      icon="it-close"
      size="24px"
      className="close"
      title={intl.formatMessage(messages.clearDates)}
    />
  );
};

const getDateRangePickerPhrases = (intl) => {
  return {
    calendarLabel: intl.formatMessage(messages.calendarLabel),
    roleDescription: intl.formatMessage(messages.roleDescription),
    closeDatePicker: intl.formatMessage(messages.closeDatePicker),
    clearDates: intl.formatMessage(messages.clearDates),
    focusStartDate: intl.formatMessage(messages.focusStartDate),
    jumpToPrevMonth: intl.formatMessage(messages.jumpToPrevMonth),
    jumpToNextMonth: intl.formatMessage(messages.jumpToNextMonth),
    keyboardShortcuts: intl.formatMessage(messages.keyboardShortcuts),
    showKeyboardShortcutsPanel: intl.formatMessage(
      messages.showKeyboardShortcutsPanel,
    ),
    hideKeyboardShortcutsPanel: intl.formatMessage(
      messages.hideKeyboardShortcutsPanel,
    ),
    openThisPanel: intl.formatMessage(messages.openThisPanel),
    enterKey: intl.formatMessage(messages.enterKey),
    leftArrowRightArrow: intl.formatMessage(messages.leftArrowRightArrow),
    upArrowDownArrow: intl.formatMessage(messages.upArrowDownArrow),
    pageUpPageDown: intl.formatMessage(messages.pageUpPageDown),
    homeEnd: intl.formatMessage(messages.homeEnd),
    escape: intl.formatMessage(messages.escape),
    questionMark: intl.formatMessage(messages.questionMark),
    selectFocusedDate: intl.formatMessage(messages.selectFocusedDate),
    moveFocusByOneDay: intl.formatMessage(messages.moveFocusByOneDay),
    moveFocusByOneWeek: intl.formatMessage(messages.moveFocusByOneWeek),
    moveFocusByOneMonth: intl.formatMessage(messages.moveFocusByOneMonth),
    moveFocustoStartAndEndOfWeek: intl.formatMessage(
      messages.moveFocustoStartAndEndOfWeek,
    ),
    returnFocusToInput: intl.formatMessage(messages.returnFocusToInput),
    keyboardForwardNavigationInstructions: intl.formatMessage(
      messages.keyboardForwardNavigationInstructions,
    ),
    keyboardBackwardNavigationInstructions: intl.formatMessage(
      messages.keyboardBackwardNavigationInstructions,
    ),
  };
};

const DateRange = (props) => {
  const intl = useIntl();
  const [focusedDateInput, setFocusedDateInput] = useState(null);
  const { DateRangePicker } = props.reactDates;
  const { id } = props;

  const start_input_id = props.startDateId ?? 'start-date' + id;
  const end_input_id = props.endDateId ?? 'start-date' + id;

  let isMobile = false;
  if (__CLIENT__) isMobile = window && window.innerWidth < 992;

  useEffect(() => {
    let startDateInput = document.getElementById(start_input_id);

    if (startDateInput) {
      let removeStartDateListener = startDateInput.addEventListener(
        'keydown',
        (e) => {
          if (e.key === 'Tab' && e.shiftKey) setFocusedDateInput(null);
        },
      );

      if (removeStartDateListener) return () => removeStartDateListener();
    }
  }, []);

  useEffect(() => {
    let endDateInput = document.getElementById(end_input_id);

    if (endDateInput) {
      let removeEndDateListener = endDateInput.addEventListener(
        'keydown',
        (e) => {
          if (e.key === 'Tab' && !e.shiftKey) setFocusedDateInput(null);
        },
      );

      if (removeEndDateListener) return () => removeEndDateListener();
    }
  }, []);

  return (
    <DateRangePicker
      noBorder={true}
      numberOfMonths={isMobile ? 1 : 2}
      minimumNights={0}
      displayFormat="DD/MM/YYYY"
      hideKeyboardShortcutsPanel={true}
      showClearDates
      focusedInput={focusedDateInput}
      onFocusChange={(focusedInput) => setFocusedDateInput(focusedInput)}
      phrases={getDateRangePickerPhrases(intl)}
      isOutsideRange={() => false}
      {...props}
      startDateId={start_input_id}
      startDatePlaceholderText={
        props.startDatePlaceholderText ??
        intl.formatMessage(messages.start_date)
      }
      endDateId={end_input_id}
      endDatePlaceholderText={
        props.endDatePlaceholderText ?? intl.formatMessage(messages.end_date)
      }
      customCloseIcon={<CloseIcon {...props} intl={intl} />}
      navPrev={<PrevIcon />}
      navNext={<NextIcon />}
      customArrowIcon={customArrowIcon({ ...props, intl })}
    />
  );
};

export default injectLazyLibs(['reactDates'])(DateRange);
