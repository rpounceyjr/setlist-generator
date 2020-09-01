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
  songPool,
}) => {
  return (
    <div className="text-center">
      <form>
        <input
          name="title"
          className="border"
          placeholder="Title"
          value={filterParameters.title}
          onChange={(event: any) => handleFilterSongInputChange(event)}
        />
        <input
          name="composer"
          className="border"
          placeholder="Composer Name"
          value={filterParameters.composer}
          onChange={(event: any) => handleFilterSongInputChange(event)}
        />
        <input
          name="songKey"
          className="border"
          placeholder="Key"
          value={filterParameters.songKey}
          onChange={(event: any) => handleFilterSongInputChange(event)}
        />
        <input
          name="style"
          className="border"
          placeholder="Style"
          value={filterParameters.style}
          onChange={(event: any) => handleFilterSongInputChange(event)}
        />
        <button
          className="border-4"
          onClick={(event: any) => filterSongs(event)}
        >
          Filter
        </button>
      </form>
      <ResetButton
        loadInitialSongs={() => loadInitialSongs()}
      />
    </div>
  );
};

export default FilterRow;
