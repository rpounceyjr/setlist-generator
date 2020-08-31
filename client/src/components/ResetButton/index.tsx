import React from "react";

interface Props {
  loadInitialSongs: () => void;
  songPool: {}
}

const ResetButton: React.FC<Props> = ({ loadInitialSongs, songPool }) => {
  return (
    <>
      <button className="text-center border-2" onClick={() => {console.log("clicked reset", songPool); loadInitialSongs()}}>
        Reset
      </button>
    </>
  );
};

export default ResetButton;
