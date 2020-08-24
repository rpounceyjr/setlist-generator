import React from "react";
import ResetButton from "../ResetButton";

interface Props {
  filterParameters: any;
  filterSongs: (event: any) => void;
  loadInitialSongs: () => void;
  handleFilterSongInputChange: (event: any) => void;
  setlistState: {};
}

const FilterRow: React.FC<Props> = ({
  filterParameters,
  filterSongs,
  loadInitialSongs,
  handleFilterSongInputChange,
  setlistState,
}) => {
  return (
    <div className="text-center">
      <form>
        <input
          name="title"
          placeholder="Title"
          value={filterParameters.title}
          onChange={(event: any) => handleFilterSongInputChange(event)}
        />
        <input
          name="composer"
          placeholder="Composer Name"
          value={filterParameters.composer}
          onChange={(event: any) => handleFilterSongInputChange(event)}
        />
        <input
          name="songKey"
          placeholder="Key"
          value={filterParameters.songKey}
          onChange={(event: any) => handleFilterSongInputChange(event)}
        />
        <input
          name="style"
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
        setlistState={setlistState}
      />
    </div>
  );
};

export default FilterRow;
