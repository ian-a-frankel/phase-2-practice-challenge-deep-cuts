import React from 'react'
import Search from './Search'
import AddTrackForm from './AddTrackForm'
import TracksList from './TracksList'

function TracksPage({tracksList, setTracksList, getTracks, searchText, setSearchText}) {
    
  return (
    <div>
      <Search searchText={searchText} setSearchText={setSearchText}/>
      <AddTrackForm getTracks={getTracks}/>
      <TracksList tracksList={tracksList} setTracksList={setTracksList}/>
    </div>
  )
}

export default TracksPage