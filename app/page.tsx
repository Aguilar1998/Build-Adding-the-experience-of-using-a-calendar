'use client';

import { Calendar, dayjsLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import dayjs from 'dayjs';

export default function App() {
  const localizer = dayjsLocalizer(dayjs);
  return (
    <div
      style={{
        width: '95vw',
        heigth: '95vh',
      }}
    >
      <Calendar localizer={localizer} />
    </div>
  );
}
