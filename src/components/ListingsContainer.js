import React, {useState, useEffect} from "react";
import AddListing from "./AddListing";
import ListingCard from "./ListingCard";
import SortListings from "./SortListings";


function ListingsContainer({ search, id }) {
  const [ lCards, setLCards ] = useState([])
  const [ sortBy, setSortBy ] = useState('id')

  useEffect(() => {
    fetch('http://localhost:6001/listings')
      .then(res => res.json())
      .then(listings => setLCards(listings))
  }, [])

  const deleteListing = (id) => {
    const newCards = lCards.filter(l => l.id !== id)
    setLCards(newCards)
  }

  const listingItems = lCards.filter((l) => l.description.toLowerCase().includes(search.toLowerCase()))
  .sort((cardA, cardB) => {
      if (sortBy === "id") {
        return cardA[ sortBy ] - cardB[ sortBy ]
      } else {
        return cardA[ sortBy ].localeCompare(cardB[ sortBy ])
      }
  })
    .map((c) =>
    <ListingCard
      key={ c.id }
      card={ c }
      onDel={ deleteListing }
    />
  )

  const addListing = (newListing) => {
    const newCards = [ newListing, ...lCards ]
    setLCards(newCards)
  }


  return (
    <main>
      <AddListing addListing={ addListing } />
      <SortListings
        onChange={ (e) => {
          setSortBy(e.target.value)
        } }
        value={ sortBy }
     />
      <h1>Listings</h1>
      <ul className="cards">{ listingItems}</ul>
    </main>
  );
}

export default ListingsContainer;
