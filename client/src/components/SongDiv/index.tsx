import React, { useState } from "react";
// import { prependOnceListener } from 'process';

interface Props {
  title: string;
  composer?: string;
  songKey?: string;
  style?: string;
  addToSetlist: (title: string) => void;
  removeFromSetlist: (title: string) => void;
}

const SongDiv: React.FC<Props> = ({
  title,
  composer,
  songKey,
  style,
  addToSetlist,
  removeFromSetlist,
}) => {
  const [clicked, setClicked] = useState<boolean>(false);

  const addOrRemoveSong = (title: string) => {
    if (!clicked) {
      setClicked(true);
      addToSetlist(title);
    } else {
      setClicked(false);
      removeFromSetlist(title);
    }

    console.log("clicked?", clicked);
  };

  return (
    <div className="text-center border-solid border-4 border-grey-600">
      <input type="checkbox" onClick={() => addOrRemoveSong(title)} />
      <span className="text-lg"> Title: {title}</span> || Composer: {composer}{" "}
      || Key: {songKey} || Style: {style}
    </div>
  );
};

export default SongDiv;
