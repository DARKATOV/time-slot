import React from 'react';
import { Slot, SlotDisabled } from './Slot';

const hours = ['8:00', '8:30', '9:00', '9:30', '10:00', '10:30', '11:00', '11:30', '12:00',
               '12:30', '1:00', '1:30', '2:00', '2:30', '3:00', '3:30', '4:00', '4:30', '5:00', 
               '5:30', '6:00', '6:30', '7:00', '7:30', '8:00'];

class Table extends React.Component {
  constructor(props) {
    super(props);
    this.handleCounter = this.handleCounter.bind(this);
    this.state = {counter: 0};
  }

  handleCounter(counter) {
    this.setState(prevState => ({
      counter: prevState.counter + counter
    }));
  }

  render() {
    const counter = this.state.counter

    const listItems = hours.map((hour, index) => {
      if (counter >= 8) {
        return <SlotDisabled key={index} hour={hour} onCounterChange={this.handleCounter} />
      } else {
        return <Slot key={index} hour={hour} onCounterChange={this.handleCounter} />
      }
    });

    return (
      <div>
        Counter: {counter}
        {listItems}
      </div>
    );
  }
}

export default Table;
