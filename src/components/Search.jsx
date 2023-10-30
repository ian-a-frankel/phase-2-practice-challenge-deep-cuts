import React from 'react'

function Search({searchText, setSearchText}) {
  return (
    <div className="search">
        <input
          type="text"
          placeholder="Search your Tracks"
          onChange={(event) => {setSearchText(event.target.value)}}
        />
        <i>🔎</i>
  </div>
  )
}

export default Search