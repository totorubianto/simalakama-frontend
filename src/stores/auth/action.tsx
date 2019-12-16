import { SystemState, UPDATE_SESSION } from './types';

function updateSession(newSession: SystemState) {
  return {
    type: UPDATE_SESSION,
    payload: newSession
  };
}

export { updateSession };
