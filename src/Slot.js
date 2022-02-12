import React from 'react';

const second = 1000;
const minute = 60*second;

class Slot extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {isSelected: false};
  }

  handleClick() {
    const isSelected = this.state.isSelected;
    if (isSelected) {
      clearTimeout(this.timerID);
      this.props.onCounterChange(1);
      this.setState({isSelected: false});
    } else {
      this.timerID = setTimeout(
        () => this.timer(),
        0.4*minute
      );
      this.props.onCounterChange(-1);
      this.setState({isSelected: true});
    }
  }

  timer() {
    this.props.onCounterChange(1);
    this.setState({isSelected: false});
  }

  render() {
    const isSelected = this.state.isSelected;
    const modifier = isSelected ? 'Button-selected ' : '';

    return (
      <button className={modifier + this.props.modifier} onClick={this.handleClick}>
        {this.props.hour}
      </button>
    );
  }
}

export default Slot;
