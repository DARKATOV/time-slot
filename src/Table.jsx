import { useState } from 'react';
import Slot from './Slot';

const Table = ({ items }) => {
  const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [theme, setTheme] = useState(isDark ? 'dark' : 'light');
  const [count, setCount] = useState(8);
  const modifier = count === 0 ? 'Button-disable' : '';
  const listItems = [];

  function handleSwitchTheme() {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  }

  items.forEach(item => {
    listItems.push(
      <Slot key={item.id} hour={item.hour} onCountChange={setCount} modifier={modifier} />
    );
  });

  return (
    <div className='Container' data-theme={theme}>
      <div className='Side'>
        <button className='SwitchButton' onClick={handleSwitchTheme}>
          Switch to {theme === 'dark' ? 'light' : 'dark'} theme
        </button>
      </div>
      {count === 0 ? <h1>Please wait...</h1> : <h1>Select a time</h1>}
      <h3>Taxis available: {count}</h3>
      {listItems}
    </div>
  );
}

export default Table;
