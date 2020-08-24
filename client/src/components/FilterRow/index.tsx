import React from "react";

interface Props {
  filterParameters: any;
  filterSongs: (event: any) => void;
  handleFilterSongInputChange: (event: any) => void;
}

const FilterRow: React.FC<Props> = ({ filterParameters, filterSongs, handleFilterSongInputChange }) => {
  return (
    <div className="text-center">
      <form>
        <input
          name="composer"
          placeholder="Composer Name"
          value={filterParameters.composer}
          onChange={(event: any) => handleFilterSongInputChange(event)}
        />
        <button
          className="border-4"
          onClick={(event: any) => filterSongs(event)}
        >
          Filter
        </button>
      </form>
    </div>
  );
};

export default FilterRow;
