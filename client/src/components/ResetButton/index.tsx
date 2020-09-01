import React from "react";

interface Props {
  loadInitialSongs: () => void;
}

const ResetButton: React.FC<Props> = ({ loadInitialSongs }) => {
  return (
    <>
      <button className="text-center border-2" onClick={loadInitialSongs}>
        Reset
      </button>
    </>
  );
};

export default ResetButton;
