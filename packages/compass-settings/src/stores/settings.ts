import type { Reducer } from 'redux';
import type { RootState } from '.';
import type { ThunkAction } from 'redux-thunk';
import { createLoggerAndTelemetry } from '@mongodb-js/compass-logging';
import type { UserConfigurablePreferences } from 'compass-preferences-model';
import { preferencesIpc } from 'compass-preferences-model';

const { log, mongoLogId } = createLoggerAndTelemetry('COMPASS-SETTINGS');

import { ActionTypes as UpdatedFieldActionTypes } from './updated-fields';
import type { Actions as UpdatedFieldActions } from './updated-fields';

export type State = Partial<UserConfigurablePreferences>;

const INITIAL_STATE: State = {};

export enum ActionTypes {
  SettingsFetched = 'compass-settings/settingsFetched',
}

type SettingsFetchedAction = {
  type: ActionTypes.SettingsFetched;
  settings: UserConfigurablePreferences;
};

export type Actions = SettingsFetchedAction;

const reducer: Reducer<State, Actions | UpdatedFieldActions> = (
  state = INITIAL_STATE,
  action
) => {
  switch (action.type) {
    case ActionTypes.SettingsFetched:
      return {
        ...action.settings,
      };
    case UpdatedFieldActionTypes.FieldUpdated:
      return {
        ...state,
        [action.field]: action.value,
      };
    default:
      return state;
  }
};

export const fetchSettings = (): ThunkAction<
  Promise<void>,
  RootState,
  void,
  Actions
> => {
  return async (dispatch): Promise<void> => {
    try {
      const settings = await preferencesIpc.getConfigurableUserPreferences();

      dispatch({
        type: ActionTypes.SettingsFetched,
        settings,
      });
    } catch (e) {
      log.warn(
        mongoLogId(1_001_000_145),
        'Settings',
        'Failed to fetch settings',
        { message: (e as Error).message }
      );
    }
  };
};

export default reducer;
