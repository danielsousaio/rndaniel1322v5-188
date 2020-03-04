import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import Dkaoda24Reducer from '../features/Dkaoda24/redux/reducers';
import Daosk23Reducer from '../features/Daosk23/redux/reducers';
import Daosk22Reducer from '../features/Daosk22/redux/reducers';
import { EmailAuthReducer } from '../features/EmailAuth/redux/reducers';

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },


  //@BlueprintReduxCombineInsertion
Dkaoda24: Dkaoda24Reducer,
Daosk23: Daosk23Reducer,
Daosk22: Daosk22Reducer,
EmailAuth: EmailAuthReducer,

});