import { ACTION_TYPES } from '../actions';

const defaultState = {
  palaceName: '',
}

export default function(state = defaultState, {type, payload}){
  let newState = Object.assign(state);
  
  switch(type){
    case ACTION_TYPES.ADD_PALACE_NAME:
      newState['palaceName'] = payload.palaceName
      return newState;
    default:
      return state;
  }
}
