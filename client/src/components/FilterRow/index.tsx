import React from "react";
import ResetButton from "../ResetButton";

interface Props {
  filterParameters: any;
  filterSongs: (event: any) => void;
  loadInitialSongs: () => void;
  handleFilterSongInputChange: (event: any) => void;
  songPool: {};
}

const FilterRow: React.FC<Props> = ({
  filterParameters,
  filterSongs,
  loadInitialSongs,
  handleFilterSongInputChange,
}) => {
  return (
    <div className="text-left ml-40">
      <form>
        <input
          name="title"
          className="border mx-1"
          placeholder="Title"
          value={filterParameters.title}
          onChange={(event: any) => handleFilterSongInputChange(event)}
        />
        <input
          name="composer"
          className="border mx-1"
          placeholder="Composer Name"
          value={filterParameters.composer}
          onChange={(event: any) => handleFilterSongInputChange(event)}
        />
        <input
          name="songKey"
          className="border mx-1"
          placeholder="Key"
          value={filterParameters.songKey}
          onChange={(event: any) => handleFilterSongInputChange(event)}
        />
        <input
          name="style"
          className="border mx-1"
          placeholder="Style"
          value={filterParameters.style}
          onChange={(event: any) => handleFilterSongInputChange(event)}
        />
        <button
          className="border-4 mx-1 w-16 text-center"
          onClick={(event: any) => filterSongs(event)}
        >
          Filter
        </button>
      </form>
      <ResetButton loadInitialSongs={() => loadInitialSongs()} />
    </div>
  );
};

export default FilterRow;
