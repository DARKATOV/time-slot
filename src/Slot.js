import React from 'react';

const second = 1000;
const minute = 60*second;

class Slot extends React.Component {
  constructor(props) {
    super(props);
    this.handleSelect = this.handleSelect.bind(this);
    this.handleDeselect = this.handleDeselect.bind(this);
    this.state = {isSelected: false};
  }

  handleSelect() {
    this.timerID = setInterval(
      () => this.tick(),
      0.2*minute
    );
    this.props.onCounterChange(1);
    this.setState({isSelected: true});
  }

  handleDeselect() {
    clearInterval(this.timerID);
    this.props.onCounterChange(-1);
    this.setState({isSelected: false});
  }

  tick() {
    clearInterval(this.timerID);
    this.props.onCounterChange(-1);
    this.setState({isSelected: false});
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  render() {
    const isSelected = this.state.isSelected;
    let button;

    if (isSelected) {
      button = <SlotSelected onClick={this.handleDeselect} hour={this.props.hour} />;
    } else {
      button = <SlotEnabled onClick={this.handleSelect} hour={this.props.hour} />;
    }

    return (
      <div>
        {button}
      </div>
    );
  }
}

class SlotDisabled extends React.Component {
  constructor(props) {
    super(props);
    this.handleDeselect = this.handleDeselect.bind(this);
  }

  handleDeselect() {
    this.props.onCounterChange(-1);
  }

  render() {
    return (
      <div>
        <button onClick={this.handleDeselect}>
          Disabled {this.props.hour}
        </button>
      </div>
    );
  }
}

function SlotSelected(props) {
  return (
    <button onClick={props.onClick}>
      Selected {props.hour}
    </button>
  );
}

function SlotEnabled(props) {
  return (
    <button onClick={props.onClick}>
      Enabled {props.hour}
    </button>
  );
}

export {
  Slot,
  SlotDisabled
};
