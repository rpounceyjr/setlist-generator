import React from "react";

interface Props {
  clearSetlist: () => void;
}

const ClearSetlistButton: React.FC<Props> = ({ clearSetlist }) => {
  return <button onClick={clearSetlist}>Clear Setlist</button>;
};

export default ClearSetlistButton;
