import React, { useState } from 'react'

function AddTrackForm({getTracks}) {
  
  const [newTrackData, setNewTrackData] = useState({image: "", title: "", artist: "", BPM: ""})
  
  function handleSubmit(event) {
    event.preventDefault()

    fetch('http://localhost:8001/tracks', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(newTrackData)
    })
    .then(() => {getTracks()})

    setNewTrackData({image: "", title: "", artist: "", BPM: ""})

  }

  function handleUpdate(event) {
    setNewTrackData( {...newTrackData, [event.target.name]: event.target.value})
    console.log(newTrackData)
  }

  return (
      <form onSubmit={handleSubmit}>
        <div>
          <input onChange={handleUpdate} value={newTrackData.image} type="text" name="image" placeholder="Image URL"/>
          <input onChange={handleUpdate} value={newTrackData.title} type="text" name="title" placeholder="title" />
          <input onChange={handleUpdate} value={newTrackData.artist} type="text" name="artist" placeholder="Artist" />
          <input onChange={handleUpdate} value={newTrackData.BPM} type="number" name="BPM" placeholder="BPM" step="1.00" />
        </div>
        <input className="" type="submit" value="Add Track" />
      </form>
  )
}

export default AddTrackForm