import { ACTION_TYPES } from '../actions';

const defaultState = []

export default function(state = defaultState, {type, payload}){
  let newState = Object.assign(state);
  
  switch(type){
    case ACTION_TYPES.UPDATE_LOCI:
      return payload
    break;
    default:
      return state;
    break;
  }
}
