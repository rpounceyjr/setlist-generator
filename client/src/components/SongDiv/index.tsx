import React, { useState } from "react";
import { useSelector } from "react-redux";
// import { prependOnceListener } from 'process';

interface Props {
    _id: string,
  title: string;
  composer: string;
  songKey: string;
  style: string;
  addToSetlist: (_id: string, title: string, composer: string, songKey: string, style: string) => void;
  removeFromSetlist: (_id: string, title: string, composer: string, songKey: string, style: string) => void;
}

const SongDiv: React.FC<Props> = ({
  _id,
  title,
  composer,
  songKey,
  style,
  addToSetlist,
  removeFromSetlist,
}) => {
  const [clicked, setClicked] = useState<boolean>(false);

  const setlist = useSelector((state: any) => state.setlist);

  const addOrRemoveSong = (_id: string, title: string, composer: string, songKey: string, style: string) => {
    if (!clicked) {
      setClicked(true);
      addToSetlist(_id, title, composer, songKey, style);
    } else {
      setClicked(false);
      removeFromSetlist(_id, title, composer, songKey, style);
    }
  };



  return (
    <div className="text-left border-solid border-4 border-grey-600">
      <input type="checkbox" onClick={() => addOrRemoveSong(_id, title, composer, songKey, style)} />
      <span className="text-lg"> Title: {title}</span> || Composer: {composer}{" "}
      || Key: {songKey} || Style: {style}
    </div>
  );
};

export default SongDiv;
