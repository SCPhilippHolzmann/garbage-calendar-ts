import * as React from 'react';
import { CalendarDay } from './CalendarDay';
import "./CalendarStyle.scss";

interface calendarProps{
    date?:Date
}

export const Calendar = (props:calendarProps) => {
    function onClickDay(day:number){
        console.log(day);
    }

    let now = new Date();
    let year = now.getFullYear();
    let month = now.getMonth();
    if(props.date !== undefined){
        year = props.date.getFullYear();
        month = props.date.getMonth();
    } 
    let firstDay = new Date(year,month,1);
    
    let dayOfWeek = firstDay.getDay();
    let dayOfWeekOffset = dayOfWeek - 1;
    firstDay.setDate(firstDay.getDate() - dayOfWeekOffset);
    let runDay = firstDay;
    let days = [];
    for(let i = 0;i<44;i++){ 
       const bToday = (runDay.getDate() === now.getDate() && runDay.getMonth() === now.getMonth())?true:false
       days.push(<CalendarDay key={''+runDay.getFullYear()+'-'+runDay.getMonth()+'-'+runDay.getDate()} day={runDay.getDate()} today={bToday} onClick={onClickDay}></CalendarDay>)
        runDay.setDate(runDay.getDate() + 1);
        if(runDay.getMonth() > month && runDay.getDay() === 1){
            break;
        }
    }



    return (
    <div className='calendar'>
        <div className="calendar-header">
            <div>Mo</div>
            <div>Di</div>
            <div>Mi</div>
            <div>Do</div>
            <div>Fr</div>
            <div>Sa</div>
            <div>So</div>
        </div>
        <div className="calendar-body">{days}</div>
    </div>
    );
}