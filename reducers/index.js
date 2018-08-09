import {
  RECEIVE_ENTRY,
  ADD_ENTRY
} from '../actions/Types'

function entries(state = {}, action){
  switch (action.type) {
    case RECEIVE_ENTRY:
      return {
        ...state,
        ...action.entries
      }
    case ADD_ENTRY:
      return {
        ...state,
        ...action.entry
      }
    default:
      return state

  }
}

export default entries
