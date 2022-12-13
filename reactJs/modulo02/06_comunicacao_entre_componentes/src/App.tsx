import { Button } from './components/Button';

export function App() {
  
  function buttonAction(txt: string) {
    alert(`${txt} of App`);
  }

  return (
    <div>
      <Button text='click on the button' onButtonAction={buttonAction}  />
    </div>
  );
}
export default App;