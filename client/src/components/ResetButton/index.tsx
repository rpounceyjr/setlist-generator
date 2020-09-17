import React from "react";

interface Props {
  loadInitialSongs: () => void;
}

const ResetButton: React.FC<Props> = ({ loadInitialSongs }) => {
  return (
    <div className="text-center">
      <button className="text-center border-4 w-48" onClick={loadInitialSongs}>
        Reset Song Pool
      </button>
    </div>
  );
};

export default ResetButton;
