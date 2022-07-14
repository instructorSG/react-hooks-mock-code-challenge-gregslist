import React, {useState} from 'react'

const AddListing = ({addListing}) => {
  const [ newItem, setNewItem ] = useState({
      description: "",
      image: "",
      location: ""
      })


  const handleChange = (e) => {
  setNewItem({ ...newItem, [ e.target.name ]: e.target.value })
}

  const handleSubmit = (e) => {

    e.preventDefault()
  fetch('http://localhost:6001/listings/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accepts': 'application/json',

    },
    body: JSON.stringify(newItem)
  })
    .then((r) => r.json())
    .then(newListing=>addListing( newListing))
  }

  return (
    <form className="add-listing-bar" onSubmit={ handleSubmit }>
      <label htmlFor='description'>Description</label>
      <input type='textarea' id='description' name='description' value={newItem.description} placeholder='description' onChange={handleChange}/>

      <label htmlFor='image'>Image</label>
      <input type='text' id='image' name='image' value={newItem.image} placeholder='Image URL' onChange={handleChange}/>

      <label htmlFor='location'>Location</label>
      <input type='text'id='location' name='location' value={newItem.location} placeholder='Location' onChange={handleChange}/>

      <button type="submit">Add Listing</button>
    </form>
  )
}

export default AddListing