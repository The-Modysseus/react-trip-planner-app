export function ShowSingleSearchResult({ state }) {
    return (
    <form >
      <label>
      Navn på skabelon:
        <input
          name="title"
          type="text"
          value={state.title}
          readOnly />
      </label>
      <br />
      <label>
      Genstande:
        <input
          name="items"
          type="text"
          value={state.items}
          readOnly />
      </label>
    </form>
    )
  }