import { combineReducers } from 'redux';
import PalaceReducer from './reducer_palace.js';


const rootReducer = combineReducers({
  palace: PalaceReducer
});

export default rootReducer;
