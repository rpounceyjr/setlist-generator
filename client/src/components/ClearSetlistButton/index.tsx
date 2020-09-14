import React from "react";

interface Props {
  clearSetlist: () => void;
}

const ClearSetlistButton: React.FC<Props> = ({ clearSetlist }) => {
  return <button className="border-2 text-red-500"onClick={clearSetlist}>Clear Setlist</button>;
};

export default ClearSetlistButton;
