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
                <th>Genstande og antal</th>
              </tr>
            </thead>
            <tbody>
              {state.map((template) => {
                return (
                  <tr key={template.id} className="templateBox">
                    <td>{template.title}</td>
                    <td>
                      {template.items.map((item) => (
                        <tr key={item.itemId}>
                          <td>{item.itemName}</td>
                          <td>{item.quantity}</td>
                        </tr>
                      ))}
                    </td>
                  </tr>
                );
              })}
        </tbody>
      </table>
      </div>
    )
  }
  