import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import Dkaoda84Reducer from '../features/Dkaoda84/redux/reducers';
import Dkaoda81Reducer from '../features/Dkaoda81/redux/reducers';
import Dkaoda78Reducer from '../features/Dkaoda78/redux/reducers';
import Dkaoda75Reducer from '../features/Dkaoda75/redux/reducers';
import Dkaoda72Reducer from '../features/Dkaoda72/redux/reducers';
import Dkaoda69Reducer from '../features/Dkaoda69/redux/reducers';
import Dkaoda66Reducer from '../features/Dkaoda66/redux/reducers';
import Dkaoda63Reducer from '../features/Dkaoda63/redux/reducers';
import Dkaoda60Reducer from '../features/Dkaoda60/redux/reducers';
import Dkaoda57Reducer from '../features/Dkaoda57/redux/reducers';
import Dkaoda54Reducer from '../features/Dkaoda54/redux/reducers';
import Dkaoda51Reducer from '../features/Dkaoda51/redux/reducers';
import Dkaoda48Reducer from '../features/Dkaoda48/redux/reducers';
import Dkaoda45Reducer from '../features/Dkaoda45/redux/reducers';
import Dkaoda42Reducer from '../features/Dkaoda42/redux/reducers';
import Dkaoda39Reducer from '../features/Dkaoda39/redux/reducers';
import Dkaoda36Reducer from '../features/Dkaoda36/redux/reducers';
import Dkaoda33Reducer from '../features/Dkaoda33/redux/reducers';
import Dkaoda30Reducer from '../features/Dkaoda30/redux/reducers';
import Dkaoda27Reducer from '../features/Dkaoda27/redux/reducers';
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
Dkaoda84: Dkaoda84Reducer,
Dkaoda81: Dkaoda81Reducer,
Dkaoda78: Dkaoda78Reducer,
Dkaoda75: Dkaoda75Reducer,
Dkaoda72: Dkaoda72Reducer,
Dkaoda69: Dkaoda69Reducer,
Dkaoda66: Dkaoda66Reducer,
Dkaoda63: Dkaoda63Reducer,
Dkaoda60: Dkaoda60Reducer,
Dkaoda57: Dkaoda57Reducer,
Dkaoda54: Dkaoda54Reducer,
Dkaoda51: Dkaoda51Reducer,
Dkaoda48: Dkaoda48Reducer,
Dkaoda45: Dkaoda45Reducer,
Dkaoda42: Dkaoda42Reducer,
Dkaoda39: Dkaoda39Reducer,
Dkaoda36: Dkaoda36Reducer,
Dkaoda33: Dkaoda33Reducer,
Dkaoda30: Dkaoda30Reducer,
Dkaoda27: Dkaoda27Reducer,
Dkaoda24: Dkaoda24Reducer,
Daosk23: Daosk23Reducer,
Daosk22: Daosk22Reducer,
EmailAuth: EmailAuthReducer,

});