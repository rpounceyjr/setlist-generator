import React from "react";

interface Props {
  loadInitialSongs: () => void;
  setlistState: {}
}

const ResetButton: React.FC<Props> = ({ loadInitialSongs, setlistState }) => {
  return (
    <>
      <button className="text-center" onClick={() => {console.log("clicked reset", setlistState); loadInitialSongs()}}>
        Reset
      </button>
    </>
  );
};

export default ResetButton;
