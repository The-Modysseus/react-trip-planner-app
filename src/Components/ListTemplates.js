import { useState, useEffect } from "react";
import { getData } from "../Services/api";
import { PageSelect } from "./PageSelect";

export function ListTemplates() {
  const initialState = [];
  const [state, setState] = useState(initialState);
  const [error, setError] = useState(null);
  const [pageNo, setPage] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getData(`templates?_page=${pageNo}`);
        setState(data);
      } catch (error) {
        setError(error);
      }
    };

    fetchData();
  }, [pageNo]);

  if (error !== null)
    return (
      <>
        <h2>Se skabeloner</h2>
        <p>{error.message}</p>
      </>
    );
  else
    return (
      <main>
        <div>
          <h2>Se skabeloner</h2>
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
          <PageSelect pageNo={pageNo} setPage={setPage} />
        </div>
      </main>
    );
}
