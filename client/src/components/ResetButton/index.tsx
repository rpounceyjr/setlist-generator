import React from "react";

interface Props {
  resetSongPool: () => void;
}

const ResetButton: React.FC<Props> = ({ resetSongPool }) => {
  return (
    <div className="text-center">
      <button className="text-center border-4 w-48" onClick={resetSongPool}>
        Reset Song Pool
      </button>
    </div>
  );
};

export default ResetButton;
