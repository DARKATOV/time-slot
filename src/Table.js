import React from 'react';
import Slot from './Slot';

class Table extends React.Component {
  constructor(props) {
    super(props);
    this.handleCounter = this.handleCounter.bind(this);
    this.handleSwitchTheme = this.handleSwitchTheme.bind(this);
    const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    this.state = {
      counter: 8,
      theme: isDark ? 'dark' : 'light'
    };
  }

  handleCounter(counter) {
    this.setState(prevState => ({
      counter: prevState.counter + counter
    }));
  }

  handleSwitchTheme() {
    this.setState(prevState => ({
      theme: prevState.theme === 'dark' ? 'light' : 'dark'
    }));
  }

  render() {
    const counter = this.state.counter;
    const theme = this.state.theme;
    const modifier = counter === 0 ? 'Button-disable' : '';
    const listItems = [];

    this.props.items.forEach(item => {
      listItems.push(
        <Slot key={item.id} hour={item.hour} onCounterChange={this.handleCounter} modifier={modifier} />
      );
    });

    return (
      <div className='Container' data-theme={theme} >
        <div className='Side'>
          <button className='SwitchButton' onClick={this.handleSwitchTheme}>
            Switch to {theme === 'dark' ? 'light' : 'dark'} theme
          </button>
        </div>
        {counter === 0 ? <h1>Please wait</h1> : <h1>Select a time</h1>}
        <h3>Taxis available: {counter}</h3>
        {listItems}
      </div>
    );
  }
}

export default Table;
