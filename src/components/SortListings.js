import React from 'react'

const SortListings = ({ value, onChange }) => {
  return (
    <form >
      Sort Listings by:
      <select onChange={ onChange} value={value}>
        <option value="description">Description</option>
        <option value="location">Location</option>
        <option value="id">Posting Order</option>
      </select>
    </form>
  )
}

export default SortListings