import ReactDOM from 'react-dom';
import Table from './Table';
import './index.css';

const ITEMS = [
  {id: 0, hour: '8:00 AM'},
  {id: 1, hour: '8:30 AM'},
  {id: 2, hour: '9:00 AM'},
  {id: 3, hour: '9:30 AM'},
  {id: 4, hour: '10:00 AM'},
  {id: 5, hour: '10:30 AM'},
  {id: 6, hour: '11:00 AM'},
  {id: 7, hour: '11:30 AM'},
  {id: 8, hour: '12:00 PM'},
  {id: 9, hour: '12:30 PM'},
  {id: 10, hour: '1:00 PM'},
  {id: 11, hour: '1:30 PM'},
  {id: 12, hour: '2:00 PM'},
  {id: 13, hour: '2:30 PM'},
  {id: 14, hour: '3:00 PM'},
  {id: 15, hour: '3:30 PM'},
  {id: 16, hour: '4:00 PM'},
  {id: 17, hour: '4:30 PM'},
  {id: 18, hour: '5:00 PM'},
  {id: 19, hour: '5:30 PM'},
  {id: 20, hour: '6:00 PM'},
  {id: 21, hour: '6:30 PM'},
  {id: 22, hour: '7:00 PM'},
  {id: 23, hour: '7:30 PM'},
  {id: 24, hour: '8:00 PM'},
];

ReactDOM.render(
  <Table items={ITEMS} />,
  document.getElementById('root')
);
