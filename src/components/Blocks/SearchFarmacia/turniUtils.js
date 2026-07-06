/**
 * Turno dal/al strings can be "DD/MM/YYYY" or "DD/MM/YYYY HH:MM" (the time
 * suffix is added when the xlsx import provides an hour range).
 */
export const parseItDate = (value, { endOfDay = false } = {}) => {
  if (!value) return null;
  const [datePart, timePart] = value.split(' ');
  const [day, month, year] = datePart.split('/');
  if (!day || !month || !year) return null;

  let hours = 0;
  let minutes = 0;
  let seconds = 0;
  let milliseconds = 0;
  if (timePart) {
    const [hh, mm] = timePart.split(':');
    hours = +hh || 0;
    minutes = +mm || 0;
  } else if (endOfDay) {
    hours = 23;
    minutes = 59;
    seconds = 59;
    milliseconds = 999;
  }

  const timestamp = new Date(
    +year,
    +month - 1,
    +day,
    hours,
    minutes,
    seconds,
    milliseconds,
  ).getTime();
  return Number.isNaN(timestamp) ? null : timestamp;
};

export const isDateWithinTurno = (turno, targetDate) => {
  const target =
    targetDate instanceof Date
      ? targetDate.getTime()
      : typeof targetDate === 'string'
      ? new Date(targetDate).getTime()
      : targetDate;
  const dal = parseItDate(turno?.dal);
  const al = parseItDate(turno?.al, { endOfDay: true });
  if (dal === null || al === null || target == null) return false;
  return dal <= target && target <= al;
};

export const getActiveTurni = (turni, targetDate) => {
  return (turni ?? []).filter((turno) => isDateWithinTurno(turno, targetDate));
};
