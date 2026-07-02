/**
 * Turno dal/al strings can be "DD/MM/YYYY" or "DD/MM/YYYY HH:MM" (the time
 * suffix is added when the xlsx import provides an hour range).
 */
export const parseItDate = (value) => {
  if (!value) return null;
  const datePart = value.split(' ')[0];
  const [day, month, year] = datePart.split('/');
  if (!day || !month || !year) return null;
  const timestamp = new Date(+year, +month - 1, +day).getTime();
  return Number.isNaN(timestamp) ? null : timestamp;
};

export const isDateWithinTurno = (turno, targetDate) => {
  const target = targetDate instanceof Date ? targetDate.getTime() : targetDate;
  const dal = parseItDate(turno?.dal);
  const al = parseItDate(turno?.al);
  if (dal === null || al === null || target == null) return false;
  return dal <= target && target <= al;
};

export const getActiveTurni = (turni, targetDate) =>
  (turni ?? []).filter((turno) => isDateWithinTurno(turno, targetDate));
