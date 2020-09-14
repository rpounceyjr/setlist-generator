import React from "react";

interface Props {
  title?: string;
  composer?: string;
  songKey?: string;
  style?: string;
  songState: object;
  handleNewSongInputChange: (event: any) => void;
  submitSong: (event: any, song: any) => void;
}

const NewSongInput: React.FC<Props> = ({
  title,
  composer,
  songKey,
  style,
  songState,
  handleNewSongInputChange,
  submitSong,
}) => {
  return (
    <form className="text-left ml-40">
      <input
        name="title"
        className="border mx-1"
        placeholder="Title"
        value={title}
        onChange={(event) => handleNewSongInputChange(event)}
      />
      <input
        name="composer"
        className="border mx-1"
        placeholder="Composer"
        value={composer}
        onChange={(event) => handleNewSongInputChange(event)}
      />
      <input
        name="songKey"
        className="border mx-1"
        placeholder="Key"
        value={songKey}
        onChange={(event) => handleNewSongInputChange(event)}
      />
      <input
        name="style"
        className="border mx-1"
        placeholder="Style"
        value={style}
        onChange={(event) => handleNewSongInputChange(event)}
      />
      <button
        className="border-4 mx-1 w-16 text-center"
        onClick={(event) => submitSong(event, songState)}
      >
        Add
      </button>
    </form>
  );
};

export default NewSongInput;
