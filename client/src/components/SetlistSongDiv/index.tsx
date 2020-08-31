import React from "react";

interface Props {
  title: string;
  composer: string;
}

const SetlistSongDiv: React.FC<Props> = ({ title, composer }) => {
  return (
    <li className="text-center">
      {title} || {composer}
    </li>
  );
};

export default SetlistSongDiv;
