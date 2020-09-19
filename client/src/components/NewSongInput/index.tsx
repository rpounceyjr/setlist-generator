import React, { useState } from "react";

interface Props {
  title?: string;
  composer?: string;
  songKey?: string;
  style?: string;
  songState: object;
  handleNewSongInputChange: (
    event: React.ChangeEvent<HTMLInputElement>
  ) => void;
  submitSong: (event: React.MouseEvent<HTMLButtonElement>, song: any) => void;
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
  const [showInputs, setShowInputs] = useState<boolean>(false);

  return (
    <>
      {!showInputs && (
        <div className="text-center">
          <button className="border-2" onClick={() => setShowInputs(true)}>Add Your Own Song</button>
        </div>
      )}
      {showInputs && (
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
            onClick={(event) => {submitSong(event, songState); setShowInputs(false)}}
          >
            Add
          </button>
        </form>
      )}
    </>
  );
};

export default NewSongInput;
