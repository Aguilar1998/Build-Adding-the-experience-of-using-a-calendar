'use client';

import { Calendar, dayjsLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import dayjs from 'dayjs';
import { CiCalendarDate } from "react-icons/ci";


export default function App() {
  const localizer = dayjsLocalizer(dayjs);

  const events = [
    {
      start: dayjs('2023-12-18T12:00:00').toDate(),
      end: dayjs('2023-12-18T13:00:00').toDate(),
      title: "Evento 1"
    },
    {
      start: dayjs('2023-12-18T12:00:00').toDate(),
      end: dayjs('2023-12-18T13:00:00').toDate(),
      title: "Evento 2",
      data: {
        x: 10
      }
    }
  ]
  const components = {
    event: props =>{
      return <div>
        <CiCalendarDate />
        {props.title}
      </div>
    }
  }


  return (
    <div className='container'>
      <Calendar 
      localizer={localizer}
      events={events}
      // views={["monthh","week","day"]}
      date ={dayjs('2023-12-19T12:00:00').toDate()}
      toolbar = {true}
      defaultView = "month"
      min={dayjs('2023-12-23T08:00:00').toDate()}
      max={dayjs('2023-12-23T18:00:00').toDate()}
      formats = {{
        dayHeaderFormat: date => {
          return dayjs(date).format("DD/MM/YYYY")
        }
      }}
      components={components}
      />
    </div>
  );
}
