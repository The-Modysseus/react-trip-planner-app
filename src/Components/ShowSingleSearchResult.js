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
    </form>
    )
  }