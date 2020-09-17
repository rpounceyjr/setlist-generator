import React from "react";

interface Props {
  filterParameters: any;
  filterSongs: (event: React.MouseEvent<HTMLButtonElement>) => void;
  handleFilterSongInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  songPool: {};
}

const FilterRow: React.FC<Props> = ({
  filterParameters,
  filterSongs,
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
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => handleFilterSongInputChange(event)}
        />
        <input
          name="composer"
          className="border mx-1"
          placeholder="Composer Name"
          value={filterParameters.composer}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => handleFilterSongInputChange(event)}
        />
        <input
          name="songKey"
          className="border mx-1"
          placeholder="Key"
          value={filterParameters.songKey}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => handleFilterSongInputChange(event)}
        />
        <input
          name="style"
          className="border mx-1"
          placeholder="Style"
          value={filterParameters.style}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => handleFilterSongInputChange(event)}
        />
        <button
          className="border-4 mx-1 w-16 text-center"
          onClick={(event: React.MouseEvent<HTMLButtonElement>) => filterSongs(event)}
        >
          Filter
        </button>
      </form>
    </div>
  );
};

export default FilterRow;
