import { ACTION_TYPES } from '../actions';

const defaultState = []

export default function(state = defaultState, {type, payload}){
  switch(type){
    case ACTION_TYPES.UPDATE_LOCI:
      return payload
    default:
      return state;
  }
}
