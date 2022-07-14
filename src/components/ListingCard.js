import React, {useState} from "react";

function ListingCard({ card,  onDel }) {
  const [ fav, setFav ] = useState(true)
  const { id, image, description, location } = card


  const favListing = () => { setFav(!fav) }

  const handleDelete = () => {
   fetch(`http://localhost:6001/listings/${id}`, {
      method: 'DELETE'
    })
    onDel(id)
  }

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={description} />
      </div>
      <div className="details">
        {fav ? (
          <button
            className="emoji-button favorite active"
            onClick = {favListing}
          >★</button>
        ) : (
          <button
            className="emoji-button favorite"
            onClick={favListing}
          >☆</button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button className="emoji-button delete" onClick = {handleDelete}>🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
