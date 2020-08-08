import React, { useState } from 'react';
// import './App.css';
import './styles/app.css';
import songs from './utils/songs.json'
import SongDiv from './components/SongDiv'

const App: React.FC = () => {
  const [songState, setSongState] = useState(songs)

  return (
    <div className= "mx-auto">
     <p className= "text-blue-500">'sup</p>
     {songState.map(song => (
     <SongDiv title={song.title} composer={song.composer} songKey={song.songKey} style={song.style}/>
     )
     )
}
     </div>
  );
}

export default App;
