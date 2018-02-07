import { ACTION_TYPES } from '../actions';

const defaultState = {
  palaceName: 'My Palace',
}

export default function(state = defaultState, {type, payload}){
  let newState = Object.assign(state);
  
  switch(type){
    case ACTION_TYPES.ADD_PALACE_NAME:
      newState['palaceName'] = payload.palaceName
      console.log("Updated: ", newState );
      return newState;
    break;
    default:
      return state;
    break;
  }
}
