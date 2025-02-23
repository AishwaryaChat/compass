import type { AnyAction, Reducer } from 'redux';

export const MAX_TIME_MS_CHANGED =
  'aggregations/max-time-ms/MAX_TIME_MS_CHANGED';

type State = null | number;

export const INITIAL_STATE: State = null;

const reducer: Reducer<State, AnyAction> = (state = INITIAL_STATE, action) => {
  if (action.type === MAX_TIME_MS_CHANGED) {
    return action.maxTimeMS;
  }
  return state;
}

export const maxTimeMSChanged = (value: number) => ({
  type: MAX_TIME_MS_CHANGED,
  maxTimeMS: isNaN(value) ? null : value
});

export default reducer;
