import { Map } from 'immutable'

function setState(state, newData) {
  return state.merge(newData)
}

function reducer(state = Map(), action) {
  console.log(action.type)
  switch (action.type) {
    case 'SET_INITIAL_STATE':
      return setState(state, action.data)
    case 'UPDATE_CURRENT_MESSAGE':
      return setState(state, action.data)
  }
  return state
}

export default reducer
