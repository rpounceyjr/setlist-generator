import React from "react";

interface Props {
  title: string;
  composer: string;
}

const SetlistSongDiv: React.FC<Props> = ({ title, composer }) => {
  return (
    <li className="mx-auto w-72 bg-indigo-300 border-4 text-green-600 list-none">
      {title} || {composer}
    </li>
  );
};

export default SetlistSongDiv;
