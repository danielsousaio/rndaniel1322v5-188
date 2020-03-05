import { all, takeEvery, take } from "redux-saga/effects";


//@BlueprintReduxSagaImportInsertion
import Dkaoda63Saga from '../features/Dkaoda63/redux/sagas';
import Dkaoda60Saga from '../features/Dkaoda60/redux/sagas';
import Dkaoda57Saga from '../features/Dkaoda57/redux/sagas';
import Dkaoda54Saga from '../features/Dkaoda54/redux/sagas';
import Dkaoda51Saga from '../features/Dkaoda51/redux/sagas';
import Dkaoda48Saga from '../features/Dkaoda48/redux/sagas';
import Dkaoda45Saga from '../features/Dkaoda45/redux/sagas';
import Dkaoda42Saga from '../features/Dkaoda42/redux/sagas';
import Dkaoda39Saga from '../features/Dkaoda39/redux/sagas';
import Dkaoda36Saga from '../features/Dkaoda36/redux/sagas';
import Dkaoda33Saga from '../features/Dkaoda33/redux/sagas';
import Dkaoda30Saga from '../features/Dkaoda30/redux/sagas';
import Dkaoda27Saga from '../features/Dkaoda27/redux/sagas';
import Dkaoda24Saga from '../features/Dkaoda24/redux/sagas';
import Daosk23Saga from '../features/Daosk23/redux/sagas';
import Daosk22Saga from '../features/Daosk22/redux/sagas';
import EmailAuthSaga from '../features/EmailAuth/redux/sagas';

function* helloSaga() {
  console.log("Hello from saga!");
}

export function* mainSaga() {
  yield all([
    takeEvery("TEST/ALO", helloSaga),
    // other sagas go here


    //@BlueprintReduxSagaMainInsertion
Dkaoda63Saga,
Dkaoda60Saga,
Dkaoda57Saga,
Dkaoda54Saga,
Dkaoda51Saga,
Dkaoda48Saga,
Dkaoda45Saga,
Dkaoda42Saga,
Dkaoda39Saga,
Dkaoda36Saga,
Dkaoda33Saga,
Dkaoda30Saga,
Dkaoda27Saga,
Dkaoda24Saga,
Daosk23Saga,
Daosk22Saga,
EmailAuthSaga,
    
  ]);
}