
import React from 'react'
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import interactionPlugin from '@fullcalendar/interaction';
import { makeStyles } from '@material-ui/styles';
import { Card, Grid } from '@material-ui/core';

const useStyles = makeStyles({
  calendar: {
    width: '80hh'
  }
})
export default function Calendar(){
  
  const calendarRef = React.createRef()
  const classes = useStyles();

  function onDateClick(arg){
    const event = prompt('Enter Event details: ');
    let calendarApi = calendarRef.current.getApi()
    calendarApi.addEvent({
      title: event,
      start: arg.dateStr,
      allDay: true
    })
    console.log(calendarApi.getEvents());
  }

    return (
      <Card style={{textAlign:'center', padding: 2+'%', display: 'flex', justifyContent: 'center'}}>
        <Grid style={{width: 80+'%'}}>
      <FullCalendar
        ref = {calendarRef}
        plugins={[ dayGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        dateClick =  {onDateClick}
      />
      </Grid>
      </Card>
    )
  }

















/*import React from "react";
import { Calendar as myCalendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import { Card } from "@material-ui/core";
import withDragAndDrop from "react-big-calendar/lib/addons/dragAndDrop";
import "react-big-calendar/lib/addons/dragAndDrop/styles.css";
import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment);

const events = [{ start: new Date(), end: new Date(), title: "special event" }];

const DnDCalendar = withDragAndDrop(myCalendar);

class Calendar extends React.Component {
  state = {
    events
  };

onEventResize = (data) => {
    const { start, end } = data;

    this.setState((state) => {
      state.events[0].start = start;
      state.events[0].end = end;
      return { events: state.events };
    });
  };

  onEventDrop = (data) => {
    console.log(data);
  };

  onClick = () => {
    const eventName = prompt('Enter event on this day:');

  }

  render() {
    return (
        <div style={{display: 'flex', justifyContent: 'center', height: '85vh'}}>
      <Card className="App" style = {{padding: 5+'%', width: 70+'%'}}>
          <h4 style={{marginBottom: 5+'%',}}>Calendar</h4>
        <DnDCalendar
          defaultDate={moment().toDate()}
          defaultView="month"
          events={this.state.events}
          localizer={localizer}
          onEventDrop={this.onEventDrop}
          onEventResize={this.onEventResize}
          resizable
          style={{ height: 500,  backgroundColor: 'white'}}
          onClick = {this.onClick}
        />
      </Card>
      </div>
    );
  }
}

export default Calendar;*/