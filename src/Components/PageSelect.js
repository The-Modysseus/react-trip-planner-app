export function PageSelect({pageNo, setPage}) {
    function previus() {
      if (pageNo > 1)
        setPage(pageNo - 1);
    }
    function next() {
      setPage(pageNo + 1);
    }
    return (
      <>
        <button className="pageSelectButton" type="button" title="Previus" onClick={previus} disabled={(pageNo < 2)} >Previus</button>
        Page {pageNo}
        <button className="pageSelectButton" type="button" title="Next" onClick={next}>Next</button>
      </>
    )
  }