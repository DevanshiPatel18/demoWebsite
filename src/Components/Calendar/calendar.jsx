import React from "react";
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
        />
      </Card>
      </div>
    );
  }
}

export default Calendar;