import React from "react";

interface Props {
    handleRandomSongInput: (event: any) => void;
    randomSongNumber?: number
}

const RandomSetlistRow: React.FC<Props> = ({handleRandomSongInput, randomSongNumber}) => {

  return (
    <div className="text-left">
      <h3>
        Add <input className="border-2" value={randomSongNumber} onChange={(event:any) => handleRandomSongInput(event)}></input>{randomSongNumber} random songs
      </h3>
      <button className="border-2">Add Songs to Setlist</button>
    </div>
  );
};

export default RandomSetlistRow;
