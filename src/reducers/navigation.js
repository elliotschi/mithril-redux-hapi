import {
  NAVIGATION_TOGGLE_MENU,
  NAVIGATION_TOGGLE_AUTH
} from '../constants/actionTypes';

const initialState = {
  isOpen: false,
  isAuthed: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case NAVIGATION_TOGGLE_MENU:
      return {
        ...state,
        isOpen: !state.isOpen
      };

    case NAVIGATION_TOGGLE_AUTH:
      return {
        ...state,
        isAuthed: !state.isAuthed
      };

    default:
      return state;
  }
}
