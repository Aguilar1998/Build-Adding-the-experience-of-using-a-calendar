'use client';

import { Calendar, dayjsLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import dayjs from 'dayjs';
import { CiCalendarDate } from "react-icons/ci";


export default function App() {
  const localizer = dayjsLocalizer(dayjs);

  const events = [
    {
      start: dayjs('2023-12-14T09:00:00').toDate(),
      end: dayjs('2023-12-14T20:00:00').toDate(),
      title: "Programar en Wespeak"
    },
    {
      start: dayjs('2023-12-14T20:30:00').toDate(),
      end: dayjs('2023-12-14T22:30:00').toDate(),
      title: "Clases En CoderHouse"
    },
    {
      start: dayjs('2023-12-18T09:00:00').toDate(),
      end: dayjs('2023-12-18T20:00:00').toDate(),
      title: "Progranar en Wespeak",
      data: {
        x: 10
      }
    },
    {
      start: dayjs('2023-12-18T20:30:00').toDate(),
      end: dayjs('2023-12-18T22:30:00').toDate(),
      title: "Clases En CoderHouse"
    },
  ]
  const components = {
    event: props =>{
      return <div className={props.title === 'Clases En CoderHouse'? "tarea-Coderhouse": "tarea-Wespeak"}>
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
      date ={dayjs('2023-12-23T12:00:00').toDate()}
      toolbar = {true}
      defaultView = "month"
      min={dayjs('2023-12-23T08:00:00').toDate()}
      max={dayjs('2023-12-23T18s:00:00').toDate()}
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
