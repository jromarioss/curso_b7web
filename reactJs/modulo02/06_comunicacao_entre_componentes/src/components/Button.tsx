interface ButtonProps {
  text: string;
  onButtonAction: (txt: string) => void;
}

export function Button({ text, onButtonAction }: ButtonProps) {

  function handleClick() {
    onButtonAction('Phrase');
  }

  return (
    <button onClick={handleClick}>{text}</button>
  );
}