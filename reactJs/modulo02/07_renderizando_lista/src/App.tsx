import { People } from './components/People';

export function App() {
  let list = [
    { id: 1, name: 'Maria', age: 20},
    { id: 2, name: 'Pedro', age: 30},
    { id: 3, name: 'Carlos', age: 15},
    { id: 4, name: 'Julia', age: 19},
    { id: 5, name: 'Miguel', age: 3}
  ];


  return (
    <div>
      <h2>Attendance list</h2>
      <ul>
        {list.map(item => {
          return (
            <People key={item.id} data={item} />
          );
        })}
      </ul>
    </div>
  );
}