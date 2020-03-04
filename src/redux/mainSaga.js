import { all, takeEvery, take } from "redux-saga/effects";


//@BlueprintReduxSagaImportInsertion
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
Dkaoda24Saga,
Daosk23Saga,
Daosk22Saga,
EmailAuthSaga,
    
  ]);
}