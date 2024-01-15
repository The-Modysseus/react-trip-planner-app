import { useState } from "react";
import { updateData } from '../Services/api';
import { SearchTemplate } from "./SearchTemplate";
import { ShowSearchResults } from "./ShowSearchResults";

export function EditTemplate() {
  const initialState = {
    id: '',
    title: '',
    items: [],
    itemId: '',
    itemName: '',
    quantity: '',
    packed: false
  };
  const [state, setState] = useState(initialState);
  const [newItemName, setNewItemName] = useState('');
  const [newItemQuantity, setNewItemQuantity] = useState('');


  async function sendUpdate(newState) {
    try {
      await updateData(`templates/${state.id}`, newState);
    }
    catch (error) {
      alert(error.message);
    }
  }

  function handleNewItemNameChange(event) {
    const newItemName = event.target.value;
    setNewItemName(newItemName);
  }

  function handleNewItemQuantityChange(event) {
    const newItemQuantity = event.target.value;
    setNewItemQuantity(newItemQuantity);
  }

  function handleSubmitNewItem(event) {
    event.preventDefault();
    const newState = {
      ...state,
      itemName: newItemName,
      quantity: newItemQuantity
    }
    setState(newState);
    sendUpdate(newState);
  }

  return (
    <>
    <h2>Rediger en skabelon</h2>
    <SearchTemplate setSearchResult={setState} />

    <h3>Søgeresultater</h3>
    <ShowSearchResults  state={state} setState={setState} />

    <form onSubmit={handleSubmitNewItem}>
      <h3>Tilføj en genstand</h3>
      <label>
        Genstand:
        <input
          name="itemName"
          type="text"
          value={newItemName}
          onChange={handleNewItemNameChange} />
      </label>
      <br />
      <label>
        Antal:
        <input
          name="quantity"
          type="number"
          value={newItemQuantity}
          onChange={handleNewItemQuantityChange} />
      </label>
      <br />
      <input type="submit" value="Opdater" />
    </form>
    </>
  );
}
