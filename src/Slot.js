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
      clearInterval(this.timerID);
      this.props.onCounterChange(-1);
      this.setState({isSelected: false});
    } else {
      this.timerID = setInterval(
        () => this.tick(),
        0.2*minute
      );
      this.props.onCounterChange(1);
      this.setState({isSelected: true});
    }
  }

  tick() {
    clearInterval(this.timerID);
    this.props.onCounterChange(-1);
    this.setState({isSelected: false});
  }

  render() {
    const isSelected = this.state.isSelected;
    const modifier = isSelected ? 'Button-selected ' : '';

    return (
      <div>
        <button className={'Button ' + modifier + this.props.modifier} onClick={this.handleClick}>
          {this.props.hour}
        </button>
      </div>
    );
  }
}

export default Slot;
