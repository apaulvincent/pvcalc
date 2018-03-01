import { AsyncStorage } from 'react-native'
import { takeEvery, select, call, put } from 'redux-saga/effects'

import {
    FETCH_EXPENSES,
    RETURN_EXPENSES,
    ADD_EXPENSE,
    DELETE_EXPENSE
} from '../actions'

import * as util from '../helpers'


const fetchExpenses = async () => {

    try {

        let expenses = await AsyncStorage.getItem('pvexp');
        return expenses ? JSON.parse(expenses) : [];

    } catch (error) {

        alert(error)
    }

}

function* fetchInitialExpenses(action) {

    const result = yield call(fetchExpenses)

    yield put({ type: RETURN_EXPENSES, result });
}


function* updateExpenses(action) {

    const expenses = yield select(state => state.expenses);
    AsyncStorage.setItem('pvexp', JSON.stringify(expenses));

}

// LISTENERS
export default function* rootSaga() {

    // LISTEN AND MAKE SIDE-EFFECTS^
    yield takeEvery(FETCH_EXPENSES, fetchInitialExpenses);
    yield takeEvery(ADD_EXPENSE, updateExpenses);
    yield takeEvery(DELETE_EXPENSE, updateExpenses);


}