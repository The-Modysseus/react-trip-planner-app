import { useState } from "react";
import { getData } from '../Services/api';

export function SearchTemplate({setSearchResult}) {
  const initialState = {
    title: '',
  };
  const [state, setState] = useState(initialState);

  function handleInputChange(event) {
    const title = event.target.name;

    setState(state => {
      return {
        ...state,
        [title]: event.target.value
      };
    });
  }

  async function searchName() {
    try {
      const data = await getData(`templates?title_like=${state.title}`);
      setSearchResult(data);
    }
    catch (error) {
      alert(error.message);
    }
  }
  function handleSearchName(event) {
    searchName(); 
  }

  return (
    <div>
      <h3>Søg efter en skabelon</h3>
      <form >
        <label>
          Navn på skabelon:
          <input
            name="title"
            type="text"
            value={state.title}
            onChange={handleInputChange} />
        </label>
        <input type="button" value="Søg" onClick={handleSearchName} />
      </form>
    </div>
  )
}