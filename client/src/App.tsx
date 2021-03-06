import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import './App.css';
import "./styles/app.css";
import ClearSetlistButton from "./components/ClearSetlistButton";
import FilterRow from "./components/FilterRow";
import Footer from "./components/Footer";
import NewSongInput from "./components/NewSongInput";
import RandomSetlistRow from "./components/RandomSetlistRow";
import ResetButton from "./components/ResetButton";
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
  const [randomSongNumber, setRandomSongNumber] = useState<string>("");
  const [invalidRandomNumber, setInvalidRandomNumber] = useState<boolean>(
    false
  );
  const [largeRandomNumber, setLargeRandomNumber] = useState<boolean>(false);

  const dispatch = useDispatch();

  const setlistSongs = useSelector((state: any) => state.setlist);

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

  function submitSong(event: React.MouseEvent<HTMLButtonElement>, song: any) {
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

  const handleNewSongInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    let { name, value } = event.target;
    setNewSongState({ ...newSongState, [name]: value });
    getAllSongs();
  };

  const handleFilterSongInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    let { name, value } = event.target;
    setFilterParameters({ ...filterParameters, [name]: value });
  };

  const handleRandomSongInput = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRandomSongNumber(event.target.value);
  };

  const filterSongs = (event: React.ChangeEvent<HTMLButtonElement>) => {
    event.preventDefault();

    const filteredSongs = [...songPool].filter((song) => {
      return (
        song.title
          ?.toLowerCase()
          .includes(filterParameters.title.toLowerCase()) &&
        song.composer
          ?.toLowerCase()
          .includes(filterParameters.composer.toLowerCase()) &&
        song.songKey
          ?.toLowerCase()
          .includes(filterParameters.songKey.toLowerCase()) &&
        song.style?.toLowerCase().includes(filterParameters.style.toLowerCase())
      );
    });

    setSongPool(filteredSongs);
  };

  const resetSongPool = () => {
    loadInitialSongs();

    setFilterParameters({
      title: "",
      composer: "",
      songKey: "",
      style: "",
    });
  };

  const addToSetlist = (_id: string, title: string, composer: string, songKey: string, style: string) => {
    dispatch({
      type: "ADD_TO_SETLIST",
      setlist: {
        _id,
        title,
        composer,
        songKey,
        style
      },
    });
  };

  const removeFromSetlist = (_id: string, title: string, composer: string, songKey: string, style: string) => {
    dispatch({
      type: "REMOVE_FROM_SETLIST",
      setlist: {
        _id,
        title,
        composer,
        songKey,
        style
      },
    });
  };

  const clearSetlist = () => {
    dispatch({
      type: "CLEAR_SETLIST",
    });
  };

  const createRandomSetlist = (number: string) => {
    // dispatch({
    //   type: "CLEAR_SETLIST",
    // });
    console.log("setlist Songs from redux", setlistSongs);

    const randomSetlist: Array<object> = [];

    if (parseInt(number) > songPool.length) {
      setRandomSongNumber("");
      return setLargeRandomNumber(true);
    } else if (isNaN(parseInt(number))) {
      setRandomSongNumber("");
      return setInvalidRandomNumber(true);
    } else {
      setLargeRandomNumber(false);
      setInvalidRandomNumber(false);

      while (randomSetlist.length < parseInt(number)) {
        console.log("adding songs");

        let randomSong = songPool[Math.floor(Math.random() * songPool.length)];
        if (
          !randomSetlist.includes(randomSong) &&
          !setlistSongs.includes(randomSong)
        ) {
          console.log("random song", randomSong);
          randomSetlist.push(randomSong);
        }
      }

      // Again, need to find a way to strong-type this instead of using any
      randomSetlist.forEach((song: any) => {
        dispatch({
          type: "ADD_TO_SETLIST",
          setlist: {
            id: song._id,
            title: song.title,
            composer: song.composer,
            songKey: song.songKey,
            style: song.style
          },
        });
      });
      setRandomSongNumber("");
    }
  };

  return (
    <div>
      {console.log("song pool", songPool)}
      <p className="text-center text-xl my-10">Setlist Generator</p>
      <hr />
      <div className="container">
        <NewSongInput
          title={newSongState.title}
          composer={newSongState.composer}
          songKey={newSongState.songKey}
          style={newSongState.style}
          songState={newSongState}
          handleNewSongInputChange={handleNewSongInputChange}
          submitSong={(event: any, song: any) => submitSong(event, song)}
        />

        <FilterRow
          filterSongs={(event: any) => filterSongs(event)}
          filterParameters={filterParameters}
          handleFilterSongInputChange={handleFilterSongInputChange}
          songPool={songPool}
        />
      </div>
      <hr />
      <div className="m-10 grid grid-cols-2  grid-flow-col col-gap-2">
        <div className="setlist-div border-2">
          <hr />
          <h3 className="text-center text-xl">Setlist:</h3>
          <hr />
          {/* need to make this focus on last added song */}
          <div>
            <div className="h-48 overflow-scroll">
              {setlistSongs &&
                setlistSongs.map((song: any, index: number) => (
                  <SetlistSongDiv
                    key={index}
                    title={song.title}
                    composer={song.composer}
                  />
                ))}
            </div>
            <RandomSetlistRow
              createRandomSetlist={createRandomSetlist}
              handleRandomSongInput={handleRandomSongInput}
              invalidRandomNumber={invalidRandomNumber}
              largeRandomNumber={largeRandomNumber}
              randomSongNumber={randomSongNumber}
            />
            <div className="text-center">
              <ClearSetlistButton clearSetlist={clearSetlist} />
            </div>
          </div>
        </div>
        <div className="songpool-div border-2">
          <SortingRow sortAlphabetically={sortAlphabetically} aToZ={aToZ} />
          <div className="h-64 overflow-scroll">
            {!isLoading &&
              songPool &&
              songPool.map((song: any) => (
                <SongDiv
                  key={song._id}
                  _id={song._id}
                  title={song.title}
                  composer={song.composer}
                  songKey={song.songKey}
                  style={song.style}
                  addToSetlist={addToSetlist}
                  removeFromSetlist={removeFromSetlist}
                />
              ))}
          </div>
          <ResetButton resetSongPool={resetSongPool} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default App;
