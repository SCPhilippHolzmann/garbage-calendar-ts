import * as React from 'react';
import "./CalendarDayStyle.scss";

interface CalendarDayProps{
    today:boolean;
    day:number;
    onClick:Function;
}

export const CalendarDay = (props:CalendarDayProps) => {
    function clickOnDay(){
        props.onClick(props.day);
    }
    let classes = 'calendar-day';
    if(props.today){
        classes += ' calendar-today';
    }
    return (
        <div className={classes} onClick={clickOnDay}>{props.day}</div>
    );
}