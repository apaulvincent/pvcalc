import { AsyncStorage } from 'react-native'
import { takeEvery, select, call, put } from 'redux-saga/effects'

import {
    FETCH_INITIAL_DATA,
    RETURN_EXPENSES
} from '../actions'




function* fetchInitialData(action) {

    const result = yield call(updateExpenses)

    // alert(JSON.stringify(result, null, 4))

    yield put({ type: RETURN_EXPENSES, result });
}


function* updateExpenses(action) {

    const expoenses = yield select(state => state.expoenses);

    AsyncStorage.setItem('pvexp', JSON.stringify(expoenses));

}


// LISTENERS
export default function* rootSaga() {

    // LISTEN AND MAKE SIDE-EFFECTS^
    yield takeEvery(FETCH_INITIAL_DATA, fetchInitialData);


}