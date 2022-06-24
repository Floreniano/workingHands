import { SET_TIMER } from '../types';

export const setTimer = (timerState) => ({
  type: SET_TIMER,
  payload: timerState,
});
