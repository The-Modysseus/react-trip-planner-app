import { useState } from "react";
import { getData, updateData } from '../Services/api';
import { SearchTemplate } from "./SearchTemplate";
import { ShowSearchResults } from "./ShowSearchResults";

export function EditTemplate() {
  const initialState = {
    itemId: '',
    itemName: '',
    quantity: '',
    packed: false
  };
  const [state, setState] = useState(initialState);
  const [newItemName, setNewItemName] = useState('');
  const [newItemQuantity, setNewItemQuantity] = useState('');


  async function sendUpdate(newItem) {
    try {
    const template = await getData(`templates/${state.id}`);
    template.items.push(newItem)
    await updateData(`templates/${state.id}`, template);
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
    const newItem = {
        itemId: state.items.length + 1, // assuming itemId is the next number in the sequence
        itemName: newItemName,
        quantity: newItemQuantity,
        packed: false
    }
    const newState = { ...state, items: [...state.items, newItem] };
    setState(newState);
    sendUpdate(newItem);
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
