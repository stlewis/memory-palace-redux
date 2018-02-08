import { combineReducers } from 'redux';
import PalaceReducer from './reducer_palace.js';
import LociReducer from './reducer_loci.js';


const rootReducer = combineReducers({
  palace: PalaceReducer,
  loci: LociReducer
});

export default rootReducer;
