import { useState } from 'react';
import Slot from './Slot';
import { getItems } from './data';

const Table = () => {
  const items = getItems();
  const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [theme, setTheme] = useState(isDark ? 'dark' : 'light');
  const [count, setCount] = useState(8);

  function handleSwitchTheme() {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  }

  return (
    <div className='Container' data-theme={theme}>
      <div className='Side'>
        <button className='SwitchButton' onClick={handleSwitchTheme}>
          Switch to {theme === 'dark' ? 'light' : 'dark'} theme
        </button>
      </div>
      {count === 0 ? <h1>Please wait...</h1> : <h1>Select a time</h1>}
      <h3>Taxis available: {count}</h3>
      {items.map(item =>
        <Slot
          key={item.id}
          hour={item.hour}
          onCountChange={setCount}
          modifier={count === 0 ? 'Button-disable' : ''}
        />
      )}
    </div>
  );
}

export default Table;
