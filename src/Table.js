import React from 'react';
import Slot from './Slot';

class Table extends React.Component {
  constructor(props) {
    super(props);
    this.handleCounter = this.handleCounter.bind(this);
    this.state = {counter: 8};
  }

  handleCounter(counter) {
    this.setState(prevState => ({
      counter: prevState.counter + counter
    }));
  }

  render() {
    const counter = this.state.counter;
    const modifier = counter === 0 ? 'Button-disable' : '';
    const listItems = [];

    this.props.items.forEach(item => {
      listItems.push(
        <Slot key={item.id} hour={item.hour} onCounterChange={this.handleCounter} modifier={modifier} />
      );
    });

    return (
      <div className='Container'>
        <h1>Select a time</h1>
        <h2>Taxis available: {counter}</h2>
        {listItems}
      </div>
    );
  }
}

export default Table;
