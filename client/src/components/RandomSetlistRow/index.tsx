import React, { useState } from "react";
import InvalidRandomNumberMessage from "../InvalidRandomNumberMessage";
import LargeRandomNumberMessage from "../LargeRandomNumberMessage";
import SetlistNameModal from "../SetlistNameModal";


interface Props {
  createRandomSetlist: (number: string) => void;
  handleRandomSongInput: (event: any) => void;
  invalidRandomNumber: boolean;
  largeRandomNumber: boolean;
  randomSongNumber: string;
}

const RandomSetlistRow: React.FC<Props> = ({
  createRandomSetlist,
  handleRandomSongInput,
  invalidRandomNumber,
  largeRandomNumber,
  randomSongNumber,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const toggleOpen = () => {
    if (isOpen) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
  };

  return (
    <div className="text-center border">
      <div>
        <h3>
          Add
          <input
            className="border-2 w-8 text-center"
            value={randomSongNumber}
            onChange={(event: any) => handleRandomSongInput(event)}
          ></input>
          random songs from song pool.
          <button
            className="border-2 ml-5"
            onClick={() => createRandomSetlist(randomSongNumber)}
          >
            Add Songs
          </button>
        </h3>
      </div>
      <div className="text-center">
        {largeRandomNumber && <LargeRandomNumberMessage />}
        {invalidRandomNumber && <InvalidRandomNumberMessage />}
        <button className="border-2" onClick={toggleOpen}>
          Save Setlist
        </button>
      </div>
      {isOpen && (
        <SetlistNameModal isOpen={isOpen} closeModal={() => setIsOpen(false)} />
      )}
    </div>
  );
};

export default RandomSetlistRow;
