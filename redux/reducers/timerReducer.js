import { SET_TIMER } from '../types';

const initialState = {
  timerState: true,
};

const timer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TIMER:
      return {
        ...state,
        timerState: action.payload,
      };
    default:
      return state;
  }
};

export default timer;
