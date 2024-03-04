import * as React from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
 import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';

export default function Calendar() {
  return (
    <LocalizationProvider  >
      <DateCalendar />
    </LocalizationProvider>
  );
}
