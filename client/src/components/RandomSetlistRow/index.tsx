import React, { useState } from "react";
import SetlistNameModal from "../SetlistNameModal";


interface Props {
  handleRandomSongInput: (event: any) => void;
  randomSongNumber?: number;
}

const RandomSetlistRow: React.FC<Props> = ({
  handleRandomSongInput,
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
    <div className="text-left">
      <h3>
        Add{" "}
        <input
          className="border-2"
          value={randomSongNumber}
          onChange={(event: any) => handleRandomSongInput(event)}
        ></input>
        {randomSongNumber} random songs
      </h3>
      <button className="border-2" onClick={toggleOpen}>
        Add Songs to Setlist
      </button>
      {isOpen && (
        <SetlistNameModal
          isOpen={isOpen}
          closeModal={() => setIsOpen(false)}
        />
      )}
    </div>
  );
};

export default RandomSetlistRow;
