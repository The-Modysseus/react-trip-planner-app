import { useState, useEffect } from "react";
import { getData } from '../Services/api';
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
      }
      catch (error) {
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
    )
  else
    return (
      <main>
        <div>
          <h2>Se skabeloner</h2>
          <table>
            <thead>
            <tr>
              <th>Navn på skabelon</th>
              <th>Genstande</th>
              <th>Udgivelsesår</th>
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
          <PageSelect pageNo={pageNo} setPage={setPage} />
        </div>
      </main>
    );
}