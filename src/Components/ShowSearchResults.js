import { ShowListSearchResults } from './ShowListSearchResults';
import { ShowSingleSearchResult } from './ShowSingleSearchResult';

export function ShowSearchResults({ state, setState }) {
  if (Array.isArray(state))
    return <ShowListSearchResults state={state} setState={setState} />
  else
    return <ShowSingleSearchResult state={state}/>
}