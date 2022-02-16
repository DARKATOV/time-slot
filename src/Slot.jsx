import { useState, useRef } from 'react';

const Slot = ({ hour, onCountChange, modifier }) => {
  const minute = 0.2;
  const [isSelected, setIsSelected] = useState(false);
  const timerId = useRef(null);
  const modifier2 = isSelected ? 'Button-selected ' : '';

  function handleClick() {
    onCountChange(prevState => isSelected ? prevState + 1 : prevState - 1);
    isSelected ? clearTimeout(timerId.current) : timerId.current = setTimeout(timer, minute*60*1000);
    setIsSelected(!isSelected);
  }

  function timer() {
    onCountChange(prevState => prevState + 1);
    setIsSelected(false);
  }

  return (
    <button className={'Button ' + modifier2 + modifier} onClick={handleClick}>
      {hour}
    </button>
  );
}

export default Slot;
