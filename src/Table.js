import React from 'react';
import Slot from './Slot';

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
    const counter = this.state.counter;
    let modifier = '';

    if (counter >= 8) {
      modifier = 'Button-disable';
    }

    const listItems = [];

    this.props.items.forEach((item) => {
      listItems.push(
        <Slot key={item.id} hour={item.hour} onCounterChange={this.handleCounter} modifier={modifier} />
      );
    });

    return (
      <div>
        {listItems}
      </div>
    );
  }
}

export default Table;
