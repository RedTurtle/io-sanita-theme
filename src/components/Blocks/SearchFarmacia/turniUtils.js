/**
 * Turno dal/al strings can be "DD/MM/YYYY" or "DD/MM/YYYY HH:MM" (the time
 * suffix is added when the xlsx import provides an hour range).
 */
export const parseItDate = (value, { endOfDay = false } = {}) => {
  if (!value) return null;
  const [datePart, timePart] = value.split(' ');
  const [day, month, year] = datePart.split('/');
  if (!day || !month || !year) return null;

  const timestamp = new Date(
    +year,
    +month - 1,
    +day,
    timePart ? timePart.split(':')[0] : endOfDay ? 23 : 0,
    timePart ? timePart.split(':')[1] : endOfDay ? 59 : 0,
    endOfDay ? 59 : 0,
    endOfDay ? 999 : 0,
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
