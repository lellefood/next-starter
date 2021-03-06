export const actionTypes = {
  FAILURE: 'FAILURE',
  INCREMENT: 'INCREMENT',
  DECREMENT: 'DECREMENT',
  RESET: 'RESET',
  LOAD_DATA: 'LOAD_DATA',
  LOAD_DATA_SUCCESS: 'LOAD_DATA_SUCCESS',
  LOAD_DATA_THEN_NAVIGATE: 'LOAD_DATA_THEN_NAVIGATE',
  LOAD_DATA_THEN_NAVIGATE_SUCCESS: 'LOAD_DATA_THEN_NAVIGATE_SUCCESS',
  START_CLOCK: 'START_CLOCK',
  STOP_CLOCK: 'STOP_CLOCK',
  TICK_CLOCK: 'TICK_CLOCK',
};

export function failure(error) {
  return {
    type: actionTypes.FAILURE,
    error,
  };
}

// ACTIONS
export function incrementCount() {
  return { type: actionTypes.INCREMENT };
}

export function decrementCount() {
  return { type: actionTypes.DECREMENT };
}

export function reset() {
  return { type: actionTypes.RESET };
}

export function loadData() {
  return { type: actionTypes.LOAD_DATA };
}

export function loadDataThenNavigate() {
  return { type: actionTypes.LOAD_DATA_THEN_NAVIGATE };
}

export function loadDataThenNavigateSuccess(data) {
  return {
    type: actionTypes.LOAD_DATA_THEN_NAVIGATE_SUCCESS,
    data,
  };
}

export function loadDataSuccess(data) {
  return {
    type: actionTypes.LOAD_DATA_SUCCESS,
    data,
  };
}

export function startClock() {
  return {
    type: actionTypes.START_CLOCK,
    ts: Date.now(),
  };
}

export function stopClock() {
  return {
    type: actionTypes.STOP_CLOCK,
  };
}

export function tickClock(isServer) {
  return {
    type: actionTypes.TICK_CLOCK,
    light: !isServer,
    ts: Date.now(),
  };
}
