import React from 'react';

interface Props {
    sortAlphabetically?: () => {}
}

const SortingRow: React.FC<Props> = ({sortAlphabetically}) => {
    return (
        <div className="text-center">
            <button className="border-4 border-radius" >Sort Alphabetically by Title</button>
        </div>
    )
};

export default SortingRow;