import React from "react";

interface Props {
  loadInitialSongs: () => void;
}

const ResetButton: React.FC<Props> = ({ loadInitialSongs }) => {
  return (
    <div className="text-center">
      <button className="text-center border-4 w-16" onClick={loadInitialSongs}>
        Reset
      </button>
    </div>
  );
};

export default ResetButton;
