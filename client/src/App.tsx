import React, { useState, useEffect } from 'react';
// import './App.css';
import './styles/app.css';
// import songs from './utils/songs.json';
import SongDiv from './components/SongDiv';
import SortingRow from './components/SortingRow';
import { getAllSongs } from './utils/API'

const App: React.FC = () => {
  const [setlistState, setSetlistState] = useState<Array<Song>>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [sorted, setSorted] = useState<boolean>(false);

  interface Song {
    _id: string,
    title: string,
    composer?: string,
    songKey?: string,
    style?: string,
  }

  function loadInitialSongs(){
    getAllSongs()
    .then((res: any) => setSetlistState(res.data))
    .catch(err => console.log(err))

    setIsLoading(false);
  }



useEffect(() => loadInitialSongs(), []);

const sortAlphabetically = () =>{
  const alphabetizedSongs = [...setlistState].sort((songA: Song, songB: Song) => {
    if (songA.title < songB.title){
      return 1;
    } else if (songA.title > songB.title){
      return -1;
    } else {
      return 0
    }
  })
  setSetlistState(alphabetizedSongs);
  setSorted(true);
}


  return (
    <div>
     <p className= "text-center text-xl my-10">Setlist Generator</p>
     <hr/>
     <SortingRow sortAlphabetically={() => sortAlphabetically}/>
     {!isLoading && setlistState && setlistState.map((song: any) => (
     <SongDiv key={song._id} title={song.title} composer={song.composer} songKey={song.songKey} style={song.style}/>
     )
     )
}
     </div>
  );
}

export default App;