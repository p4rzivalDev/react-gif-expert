import { useState } from 'react';

export const AddCategory = ({ onNewCategory }) => {

  const [inputValue, setInputValue] = useState('');

  const onInputChange = ({ target }) => {
    setInputValue(target.value); // Insert data to input with useState information
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if(inputValue.trim().length <= 1) return;

    onNewCategory( inputValue.trim() ); // Send data to prop callback event ( NewCategory )
    setInputValue(''); // Reset data to input
  };
  
  return (

    <form onSubmit={ onSubmit }>
      <input 
        type="text"
        placeholder="Buscar Gifs"
        value={ inputValue }
        onChange={ onInputChange } // Event that reacts with changes in entrance of letters
      />
    </form>

  )
}
