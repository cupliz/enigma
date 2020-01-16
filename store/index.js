const defaultState = {
  lastUpdate: 0,
  light: false,
  count: 0
}

// REDUCERS
export const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'TICK':
      return Object.assign({}, state, {
        lastUpdate: action.ts,
        light: !!action.light
      })
    case 'INCREMENT':
      return Object.assign({}, state, {
        count: state.count + 1
      })
    case 'DECREMENT':
      return Object.assign({}, state, {
        count: state.count - 1
      })
    case 'RESET':
      return Object.assign({}, state, {
        count: defaultState.count
      })
    default:
      return state
  }
}

// ACTIONS
export const serverRenderClock = isServer => dispatch => {
  return dispatch({ type: 'TICK', light: !isServer, ts: Date.now() })
}

export const startClock = dispatch => {
  return setInterval(() => {
    dispatch({ type: 'TICK', light: true, ts: Date.now() })
  }, 1000)
}

export const incrementCount = () => dispatch => {
  return dispatch({ type: 'INCREMENT' })
}

export const decrementCount = () => dispatch => {
  return dispatch({ type: 'DECREMENT' })
}

export const resetCount = () => dispatch => {
  return dispatch({ type: 'RESET' })
}

export function initializeStore (initialState = defaultState) {
  return createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(thunkMiddleware))
  )
}