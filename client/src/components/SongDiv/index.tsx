import React from 'react';
// import { prependOnceListener } from 'process';

interface Props{
    title: string,
    composer?: string,
    songKey?: string,
    style?: string,
}
const SongDiv: React.FC<Props> = ({title, composer, songKey, style}) => {
    return (
        <div className="text-center border-solid border-4 border-grey-600"><span className="text-lg">Title:{title}</span> || Composer: {composer} || Key: {songKey} || Style: {style}</div>
    )
};

export default SongDiv;