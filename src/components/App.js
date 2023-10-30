import React, { useState, useEffect } from "react";
import TracksPage from './TracksPage'
import '../App.css';
import vinyl from '../assets/vinyl_PNG88.png';

function App() {

  const [tracksList, setTracksList] = useState([])
  const [searchText, setSearchText] = useState('')

  const filteredTracksList = tracksList.filter(track => track.title.toLowerCase().includes(searchText.toLowerCase()))

  function getTracks() {
    fetch('http://localhost:8001/tracks')
    .then(res => res.json())
    .then(data => {setTracksList(data)})
  }
  
    useEffect( () => getTracks(),
    [setTracksList])
  return (
    <div>
      <div className="header">
        <img src={vinyl} alt="vinyl record" />
        <h1>Flatiron Deep Cuts</h1>
      </div>
      <TracksPage searchText={searchText} setSearchText={setSearchText} tracksList={filteredTracksList} setTracksList={setTracksList} getTracks={getTracks}/>
    </div>

  );
}

export default App;
