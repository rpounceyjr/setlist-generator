import { AnyAction } from "redux";

const rootReducer = (state:any = initState, action: AnyAction) => {
  switch (action.type) {
    case "ADD_TO_SETLIST":
      return {
        ...state,
        setlist: [...state.setlist, action.title],
      };
    case "REMOVE_FROM_SETLIST":
      return {
        ...state,
        setlist: state.setlist.filter((song:object) => song !== action.title),
      };
    default:
      return state;
  }
};

const initState = {
  setlist: [],
};

export default rootReducer;
