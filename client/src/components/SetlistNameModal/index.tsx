import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { createNewSetlist } from "../../utils/API";

interface Props {
  isOpen: boolean;
  closeModal: () => void;
}

const SetlistNameModal: React.FC<Props> = ({ isOpen, closeModal }) => {
  const dispatch = useDispatch();

  const setlistName = useSelector((state: any) => state.name);
  const setlist = useSelector((state: any) => state);

  const handleInputChange = (event: any) => {
    dispatch({
      type: "NAME_SETLIST",
      name: event.target.value,
    });
  };

  const createSetlist = (setlist: object) => {
    console.log("setlist name", setlistName);

    createNewSetlist(setlist)
      .then((res: any) => console.log(res.data))
      .catch((err: any) => console.log(err));

    closeModal();
  };

  if (!isOpen) return null;

  return (
    <>
      <div className="text-center">
        Enter a Setlist Name: <input className="border-2" onChange={handleInputChange}></input>
        <button className="border-2" onClick={() => createSetlist(setlist)}>
          Submit
        </button>
      </div>
    </>
  );
};

export default SetlistNameModal;
