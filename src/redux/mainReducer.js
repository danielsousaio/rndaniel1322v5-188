import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import Daosk22Reducer from '../features/Daosk22/redux/reducers';
import { EmailAuthReducer } from '../features/EmailAuth/redux/reducers';

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },


  //@BlueprintReduxCombineInsertion
Daosk22: Daosk22Reducer,
EmailAuth: EmailAuthReducer,

});