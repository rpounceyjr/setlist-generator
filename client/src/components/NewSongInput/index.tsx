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
    <form className="text-center">
      <input
        name="title"
        placeholder="Title"
        value={title}
        onChange={(event) => handleNewSongInputChange(event)}
      />
      <input
        name="composer"
        placeholder="Composer"
        value={composer}
        onChange={(event) => handleNewSongInputChange(event)}
      />
      <input
        name="songKey"
        placeholder="Key"
        value={songKey}
        onChange={(event) => handleNewSongInputChange(event)}
      />
      <input
        name="style"
        placeholder="Style"
        value={style}
        onChange={(event) => handleNewSongInputChange(event)}
      />
      <button
        className="border-4 border-radius"
        onClick={(event) => submitSong(event, songState)}
      >
        Add Song
      </button>
    </form>
  );
};

export default NewSongInput;
