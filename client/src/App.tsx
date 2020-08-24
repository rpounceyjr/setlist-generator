import React, { useState, useEffect } from "react";
// import './App.css';
import "./styles/app.css";
import NewSongInput from "./components/NewSongInput";
import SongDiv from "./components/SongDiv";
import SortingRow from "./components/SortingRow";
import { getAllSongs, createNewSong } from "./utils/API";

const App: React.FC = () => {
  const [setlistState, setSetlistState] = useState<Array<Song>>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [aToZ, setAtoZ] = useState<boolean>(false);
  const [newSongState, setNewSongState] = useState<NewSong>({
    title: "",
    composer: "",
    songKey: "",
    style: "",
  });

  interface NewSong {
    title: string;
    composer: string;
    songKey: string;
    style: string;
  }

  interface Song {
    _id: string;
    title: string;
    composer?: string;
    songKey?: string;
    style?: string;
  }

  function loadInitialSongs() {
    getAllSongs()
      .then((res: any) => setSetlistState(res.data))
      .catch((err: any) => console.log(err));

    setIsLoading(false);
  }

  function submitSong(event: any, song: any) {
    event.preventDefault();

    createNewSong(song)
      .then((res: any) => setSetlistState([...setlistState, res]))
      .catch((err: any) => console.log(err));
  }

  useEffect(() => loadInitialSongs(), []);

  const sortAlphabetically = () => {
    const alphabetizedSongs = [...setlistState].sort(
      (songA: Song, songB: Song) => {
        if (!aToZ) {
          setAtoZ(true);
          if (songA.title > songB.title) {
            return 1;
          } else if (songA.title < songB.title) {
            return -1;
          } else {
            return 0;
          }
        } else {
          setAtoZ(false);
          if (songA.title < songB.title) {
            return 1;
          } else if (songA.title > songB.title) {
            return -1;
          } else {
            return 0;
          }
        }
      }
    );
    setSetlistState(alphabetizedSongs);
  };

  const handleInputChange = (event: any) => {
    let {name, value} = event.target;
    setNewSongState({...newSongState, [name]: value});
    console.log("new song state", newSongState);
  };

  return (
    <div>
      <p className="text-center text-xl my-10">Setlist Generator</p>
      <hr />
      <NewSongInput
        title={newSongState.title}
        composer={newSongState.composer}
        songKey={newSongState.songKey}
        style={newSongState.style}
        songState={newSongState}
        handleInputChange={handleInputChange}
        submitSong={(event: any, song: any) => submitSong(event, song)}
      />
      <SortingRow sortAlphabetically={sortAlphabetically} aToZ={aToZ} />
      {!isLoading &&
        setlistState &&
        setlistState.map((song: any) => (
          <SongDiv
            key={song._id}
            title={song.title}
            composer={song.composer}
            songKey={song.songKey}
            style={song.style}
          />
        ))}
    </div>
  );
};

export default App;
