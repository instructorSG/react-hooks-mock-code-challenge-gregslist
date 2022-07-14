import { useState }  from "react";

function Search({onSearch}) {
  const [currSearch, setCurrSearch]= useState("")

  function handleSubmit(e) {
    e.preventDefault();
    onSearch(currSearch)
  }

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={currSearch}
        onChange={ (e) =>setCurrSearch(e.target.value)}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;
