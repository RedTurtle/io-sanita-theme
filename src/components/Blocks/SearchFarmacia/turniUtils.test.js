import { parseItDate, isDateWithinTurno, getActiveTurni } from './turniUtils';

describe('parseItDate', () => {
  it('returns null for empty/falsy input', () => {
    expect(parseItDate(null)).toBeNull();
    expect(parseItDate(undefined)).toBeNull();
    expect(parseItDate('')).toBeNull();
  });

  it('parses a date-only string (DD/MM/YYYY)', () => {
    expect(parseItDate('15/03/2024')).toBe(new Date(2024, 2, 15).getTime());
  });

  it('parses a date with a time suffix (DD/MM/YYYY HH:MM), ignoring the time', () => {
    expect(parseItDate('15/03/2024 14:30')).toBe(
      new Date(2024, 2, 15).getTime(),
    );
  });

  it('returns null when the date part is incomplete', () => {
    expect(parseItDate('15/03')).toBeNull();
    expect(parseItDate('//2024')).toBeNull();
  });

  it('returns null for an invalid (non-numeric) date', () => {
    expect(parseItDate('aa/bb/cccc')).toBeNull();
  });
});

describe('isDateWithinTurno', () => {
  const turno = { dal: '10/03/2024', al: '20/03/2024' };

  it('returns true when the target date is within the range', () => {
    expect(isDateWithinTurno(turno, new Date(2024, 2, 15).getTime())).toBe(
      true,
    );
  });

  it('returns true when the target date matches the boundaries', () => {
    expect(isDateWithinTurno(turno, new Date(2024, 2, 10).getTime())).toBe(
      true,
    );
    expect(isDateWithinTurno(turno, new Date(2024, 2, 20).getTime())).toBe(
      true,
    );
  });

  it('returns false when the target date is outside the range', () => {
    expect(isDateWithinTurno(turno, new Date(2024, 2, 9).getTime())).toBe(
      false,
    );
    expect(isDateWithinTurno(turno, new Date(2024, 2, 21).getTime())).toBe(
      false,
    );
  });

  it('accepts a Date instance as targetDate', () => {
    expect(isDateWithinTurno(turno, new Date(2024, 2, 15))).toBe(true);
  });

  it('returns false when turno dates are missing/invalid', () => {
    expect(isDateWithinTurno({ dal: null, al: '20/03/2024' }, Date.now())).toBe(
      false,
    );
    expect(isDateWithinTurno({}, Date.now())).toBe(false);
  });

  it('returns false when targetDate is null/undefined', () => {
    expect(isDateWithinTurno(turno, null)).toBe(false);
    expect(isDateWithinTurno(turno, undefined)).toBe(false);
  });
});

describe('getActiveTurni', () => {
  const turni = [
    { dal: '01/01/2024', al: '10/01/2024' },
    { dal: '15/01/2024', al: '31/01/2024' },
  ];

  it('returns only the turni that include the target date', () => {
    const target = new Date(2024, 0, 20).getTime();
    expect(getActiveTurni(turni, target)).toEqual([turni[1]]);
  });

  it('returns an empty array when no turno matches', () => {
    const target = new Date(2024, 1, 1).getTime();
    expect(getActiveTurni(turni, target)).toEqual([]);
  });

  it('returns an empty array when turni is null/undefined', () => {
    expect(getActiveTurni(null, Date.now())).toEqual([]);
    expect(getActiveTurni(undefined, Date.now())).toEqual([]);
  });
});
