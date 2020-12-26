import {combineReducers} from 'redux';

import EventReducer from '../reducer/Form_reducer';

//Combine reducers
const reducers = combineReducers({
 eventSearchState: EventReducer,
});

export default reducers;
