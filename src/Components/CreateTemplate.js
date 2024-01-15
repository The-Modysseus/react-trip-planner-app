import { useState } from "react";
import { postData } from '../Services/api';

export function CreateTemplate() {
  const initialState = {
    title: '',
    items: []
  };
  const [state, setState] = useState(initialState);

  function handleInputChange(event) {
    const name = event.target.name;

    setState(state => {
      return {
        ...state,
        [name]: event.target.value
      };
    });
  }

  async function sendData() {
    try {
      await postData('templates', state);
      setState(initialState);
    }
    catch (error) {
      alert(error.message);
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    sendData();
    alert('Skabelon oprettet');
  }

  function handleReset(event) {
    setState(initialState);
    event.preventDefault();
  }

  return (
    <>
    <h2>Tilføj et skabelon</h2>
    <form onSubmit={handleSubmit}>
      <label>
        Navn på skabelon:
        <input
          name="title"
          type="text"
          value={state.title}
          onChange={handleInputChange} />
      </label>
      <br />
      <input type="reset" value="Cancel" onClick={handleReset} /> <input type="submit" value="Opret skabelon" />
    </form>
    </>
  );
}
