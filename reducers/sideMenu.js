import { TOGGLE_MENU } from '../actions/sideMenu';

export const isSideMenuOpened = (state = false, action) => {
  switch (action.type) {
    case TOGGLE_MENU:
      return !state;
    default:
      return state;
  }
};
