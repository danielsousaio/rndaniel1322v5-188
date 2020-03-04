import { all, takeEvery, take } from "redux-saga/effects";


//@BlueprintReduxSagaImportInsertion
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
Dkaoda30Saga,
Dkaoda27Saga,
Dkaoda24Saga,
Daosk23Saga,
Daosk22Saga,
EmailAuthSaga,
    
  ]);
}