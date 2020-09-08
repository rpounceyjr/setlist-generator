import React, { useState } from "react";
// import { prependOnceListener } from 'process';

interface Props {
  title: string;
  composer: string;
  songKey?: string;
  style?: string;
  addToSetlist: (title: string, composer: string) => void;
  removeFromSetlist: (title: string, composer: string) => void;
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

  const addOrRemoveSong = (title: string, composer: string) => {
    if (!clicked) {
      setClicked(true);
      addToSetlist(title, composer);
    } else {
      setClicked(false);
      removeFromSetlist(title, composer);
    }
  };

  return (
    <div className="text-left border-solid border-4 border-grey-600">
      <input type="checkbox" onClick={() => addOrRemoveSong(title, composer)} />
      <span className="text-lg"> Title: {title}</span> || Composer: {composer}{" "}
      || Key: {songKey} || Style: {style}
    </div>
  );
};

export default SongDiv;
