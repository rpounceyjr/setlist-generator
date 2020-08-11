import React, { useState, useEffect } from 'react';
// import './App.css';
import './styles/app.css';
import songs from './utils/songs.json';
import SongDiv from './components/SongDiv';
import SortingRow from './components/SortingRow';
import { getAllSongs } from './utils/API'

const App: React.FC = () => {
  const [setlistState, setSetlistState] = useState(songs)

  function loadInitialSongs(){
    getAllSongs()
    .then((res: any) => setSetlistState(res.data))
    .catch(err => console.log(err))
  }

useEffect(() => loadInitialSongs(), []);


  return (
    <div>
     <p className= "text-center text-xl my-10">Setlist Generator</p>
     <hr/>
     <SortingRow />
     {setlistState.map(song => (
     <SongDiv title={song.title} composer={song.composer} songKey={song.songKey} style={song.style}/>
     )
     )
}
     </div>
  );
}

export default App;
