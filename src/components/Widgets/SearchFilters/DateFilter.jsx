import React, { useState, useEffect } from 'react';
import { DateRange } from 'io-sanita-theme/components';

const DateFilter = (props) => {
  const [focusedDateInput, setFocusedDateInput] = useState(null);
  const {
    value,
    id,
    onChange,
    startLabel,
    endLabel,
    defaultStart,
    defaultEnd,
    ...rest
  } = props;

  return (
    <div className="filter-wrapper date-filter">
      <DateRange
        {...rest}
        startDate={value?.startDate || defaultStart}
        startDatePlaceholderText={startLabel}
        endDate={value?.endDate || defaultEnd}
        endDatePlaceholderText={endLabel}
        onDatesChange={({ startDate, endDate }) => {
          let start = startDate || defaultStart;
          let end = endDate || defaultEnd;
          onChange(id, { start, end });
        }}
      />
    </div>
  );
};

export default DateFilter;
