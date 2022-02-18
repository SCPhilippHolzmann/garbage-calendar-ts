import * as React from 'react';
import { Calendar } from '../Components/Calendar';

export class CalendarPage extends React.Component<{},{now:Date,monthLabel:string}>{

    months = ['Januar','Februar','März','April','Mai','Juni','Juli','August','September','Oktober','November','Dezember'];

    constructor(props:Object){
        super(props);
        this.state = {
            now: new Date(),
            monthLabel: this.months[(new Date()).getMonth()]
        }
        this.nextMonth = this.nextMonth.bind(this);
        this.prevMonth = this.prevMonth.bind(this);
    }

    nextMonth(){
        let date = this.state.now;
        date.setMonth(date.getMonth() + 1);
        console.log(date.getMonth());
        this.setState({now: date});//.now.setMonth(now.getMonth() + 1);
        this.setState({monthLabel: this.months[this.state.now.getMonth()]});//monthLabel = months[now.getMonth()];
    }
    prevMonth(){
        console.log('drin');
        //now.setMonth(now.getMonth() - 1);
        //monthLabel = months[now.getMonth()];
        let date = this.state.now;
        date.setMonth(date.getMonth() - 1);
        console.log(date.getMonth());
        this.setState({now: date});//.now.setMonth(now.getMonth() + 1);
        this.setState({monthLabel: this.months[this.state.now.getMonth()]});//monthLabel = months[now.getMonth()];
    }

    render(): React.ReactNode {
        return (
            <div>
                <div className='calendar-month'>
                    <button className='calendar-month-prev' onClick={() => this.prevMonth()} >Previous</button>
                    <span>{this.state.monthLabel}</span>
                    <button className='calendar-month-next' onClick={() => this.nextMonth()}>Next</button>
                </div>
                <Calendar date={this.state.now}></Calendar>
            </div>
        );
    }
}
/*
export const CalendarPage = () => {
    let now = new Date();
    const months = ['Januar','Februar','März','April','Mai','Juni','Juli','August','September','Oktober','November','Dezember'];
    let monthLabel = months[now.getMonth()];
    
    return (
    <div>
        <div className='calendar-month'>
            <button className='calendar-month-prev' onClick={prevMonth} >Previous</button>
            <span>{monthLabel}</span>
            <button className='calendar-month-next' onClick={nextMonth}>Next</button>
        </div>
        <Calendar month={now.getMonth()} year={now.getFullYear()}></Calendar>
    </div>
    );
}
*/