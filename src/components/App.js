import React, {useState} from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";




function App() {
  const [ search, setSearch ] = useState("")
  const [newItem, setNewItem]=useState('')

  const resetSearch = ( newSearch ) => setSearch(newSearch)
  const addListing = (newListing) => setNewItem(newListing)

  return (
    <div className="app">

      <Header onSearch={ resetSearch } onAdd={ addListing } />
      <ListingsContainer search={ search } addItem={newItem } />
    </div>
  );
}

export default App;
