import { useState, useRef } from 'react';

const Slot = (props) => {
  const minute = 0.2;
  const [isSelected, setIsSelected] = useState(false);
  const timerId = useRef(null);
  const modifier2 = isSelected ? 'Button-selected ' : '';

  function handleClick() {
    props.onCountChange(prevState => isSelected ? prevState + 1 : prevState - 1);
    isSelected ? clearTimeout(timerId.current) : timerId.current = setTimeout(timer, minute*60*1000);
    setIsSelected(!isSelected);
  }

  function timer() {
    props.onCountChange(prevState => prevState + 1);
    setIsSelected(false);
  }

  return (
    <button className={'Button ' + modifier2 + props.modifier} onClick={handleClick}>
      {props.hour}
    </button>
  );
}

export default Slot;
