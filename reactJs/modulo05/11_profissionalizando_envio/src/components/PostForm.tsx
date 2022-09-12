import { useState, ChangeEvent } from 'react';

type Props = {
  onAdd: (title: string, body: string) => void;
}

export const PostForm = ({ onAdd }: Props) => {
  const [addtitleText, setAddTitleText] = useState('');
  const [addBodyText, setAddBodyText] = useState('');

  const handleAddTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setAddTitleText(e.target.value);
  }

  const handleAddBodyChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setAddBodyText(e.target.value);
  }

  const handleAddClick = async () => {
    if (addtitleText && addBodyText) {
      onAdd(addtitleText, addBodyText);
    } else {
      alert("Preencha os campos...");
    }
  }

  return (
    <fieldset className="border-2 mb-3 p-3">
        <legend className="font-bold">Adicionar Novo Post</legend>
        <input
          className="border block mb-3 p-2"
          type="text"
          value={ addtitleText }
          placeholder="Digite o seu título"
          onChange={ handleAddTitleChange }
          />
        <textarea
          className="border block mb-3 p-2"
          value={ addBodyText }
          onChange={ handleAddBodyChange }
        ></textarea>
        <button
          className="border block p-2 rounded bg-orange-400 border-zinc-800 font-bold hover:bg-orange-600 ease-in duration-300"
          onClick={ handleAddClick }
        >Adicionar</button>
      </fieldset>
  );
}