import './ShowListSearchResults.css' 

export function ShowListSearchResults({ state, setState }) {
    function handleEdit(sender){
      const element = sender.target;
      const index = element.getAttribute('data-index');
      setState(state[index]);
    }
    return (
      <div className="ShowListSearchResults">
      <table>
        <thead>
        <tr>
              <th>Navn på skabelon</th>
              <th>Genstande</th>
            </tr>
        </thead>
        <tbody>
        {state.map(item => {
              return (
                <tr key={item.id}>
                  <td>{item.title}</td>
                  <td>{item.items}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
      </div>
    )
  }
  