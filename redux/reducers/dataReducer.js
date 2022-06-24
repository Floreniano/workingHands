import { SET_DATA } from '../types';

const initialState = {
  currentData: [],
};

const data = (state = initialState, action) => {
  switch (action.type) {
    case SET_DATA:
      return {
        ...state,
        currentData: action.payload,
      };
    default:
      return state;
  }
};

export default data;
