import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import './App.css';
import "./styles/app.css";
import FilterRow from "./components/FilterRow";
import NewSongInput from "./components/NewSongInput";
import SetlistSongDiv from "./components/SetlistSongDiv";
import SongDiv from "./components/SongDiv";
import SortingRow from "./components/SortingRow";
import { getAllSongs, createNewSong } from "./utils/API";

const App: React.FC = () => {
  const [songPool, setSongPool] = useState<Array<Song>>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [aToZ, setAtoZ] = useState<boolean>(false);
  const [filterParameters, setFilterParameters] = useState<NewSong>({
    title: "",
    composer: "",
    songKey: "",
    style: "",
  });
  const [newSongState, setNewSongState] = useState<NewSong>({
    title: "",
    composer: "",
    songKey: "",
    style: "",
  });

  const dispatch = useDispatch();

  const setlist = useSelector((state: any) => state.setlist);

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
      .then((res: any) => setSongPool(res.data))
      .catch((err: any) => console.log(err));

    setIsLoading(false);
  }

  function submitSong(event: any, song: any) {
    event.preventDefault();

    createNewSong(song)
      .then((res: any) => setSongPool([...songPool, res]))
      .catch((err: any) => console.log(err));
  }

  useEffect(() => loadInitialSongs(), []);

  const sortAlphabetically = () => {
    const alphabetizedSongs = [...songPool].sort((songA: Song, songB: Song) => {
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
    });
    setSongPool(alphabetizedSongs);
  };

  const handleNewSongInputChange = (event: any) => {
    let { name, value } = event.target;
    setNewSongState({ ...newSongState, [name]: value });
    getAllSongs();
  };

  const handleFilterSongInputChange = (event: any) => {
    let { name, value } = event.target;
    setFilterParameters({ ...filterParameters, [name]: value });
    console.log("Filter parameters", filterParameters);
  };

  const filterSongs = (event: any) => {
    event.preventDefault();

    const filteredSongs = [...songPool].filter((song) => {
      return (
        song.title?.includes(filterParameters.title) &&
        song.composer?.includes(filterParameters.composer) &&
        song.songKey?.includes(filterParameters.songKey) &&
        song.style?.includes(filterParameters.style)
      );
    });

    setSongPool(filteredSongs);

    setFilterParameters({
      title: "",
      composer: "",
      songKey: "",
      style: "",
    });
  };

  const addToSetlist = (title: string, composer:string) => {
    console.log("adding...");
    console.log(setlist);
    dispatch({
      type: "ADD_TO_SETLIST",
      setlist: {
        title, 
        composer
      }
    });
  };

  const removeFromSetlist = (title: string, composer:string) => {
    console.log("removing...");
    dispatch({
      type: "REMOVE_FROM_SETLIST",
      setlist: {
        title, 
        composer
      }
    });
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
        handleNewSongInputChange={handleNewSongInputChange}
        submitSong={(event: any, song: any) => submitSong(event, song)}
      />
      <SortingRow sortAlphabetically={sortAlphabetically} aToZ={aToZ} />
      <FilterRow
        filterSongs={(event: any) => filterSongs(event)}
        filterParameters={filterParameters}
        loadInitialSongs={loadInitialSongs}
        handleFilterSongInputChange={handleFilterSongInputChange}
        songPool={songPool}
      />
      <hr />
      <h3 className="text-center text-xl">Setlist:</h3>
      {setlist && setlist.map((song:any, index: number) => (
        <SetlistSongDiv 
          key={index}
          title={song.title}
          composer={song.composer}/>
      ))}
      <hr />
      <hr />
      {!isLoading &&
        songPool &&
        songPool.map((song: any) => (
          <SongDiv
            key={song._id}
            title={song.title}
            composer={song.composer}
            songKey={song.songKey}
            style={song.style}
            addToSetlist={addToSetlist}
            removeFromSetlist={removeFromSetlist}
          />
        ))}
    </div>
  );
};

export default App;
