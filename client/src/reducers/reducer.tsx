import { AnyAction } from "redux";

const rootReducer = (state:any = initState, action: AnyAction) => {
  switch (action.type) {
    case "ADD_TO_SETLIST":
      return {
        ...state,
        setlist: [...state.setlist, action.setlist],
      };
    case "REMOVE_FROM_SETLIST":
      return {
        ...state,
        // figure out how to strong type this so song isn't any type
        setlist: state.setlist.filter((song:any) => song.title !== action.setlist.title && song.composer !== action.setlist.composer),
      };
    case "CLEAR_SETLIST":
      console.log("clearing setlist...")
      return {
        ...state,
        setlist: []
      }
    default:
      return state;
  }
};

const initState = {
  setlist: [],
};

export default rootReducer;
