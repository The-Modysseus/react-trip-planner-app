import { useState } from "react";
import { getData } from '../Services/api';

export function SearchTemplate({setSearchResult}) {
  const initialState = {
    name: '',
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

  async function searchName() {
    try {
      const data = await getData(`templates?name_like=${state.name}`);
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