import React from 'react';

class Slot extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {isSelected: false};
  }

  handleClick() {
    this.setState(prevState => ({
      isSelected: !prevState.isSelected
    }));
  }

  render() {
    const isSelected = this.state.isSelected;
    let button;
    
    if (isSelected) {
      button = <SlotSelected onClick={this.handleClick} />;
    } else {
      button = <SlotNotSelected onClick={this.handleClick} time={this.props.hour} />;
    }

    return (
      <div>
        {button}
      </div>
    );
  }
}

function SlotSelected(props) {
  return (
    <button onClick={props.onClick}>
      Selected
    </button>
  );
}

function SlotNotSelected(props) {
  return (
    <button onClick={props.onClick}>
      {props.hour}
    </button>
  );
}

export default Slot;
