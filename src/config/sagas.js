import { takeEvery, select, call, put } from 'redux-saga/effects'

import realm, {
    fetchExpenses,
    addExpense,
    deleteExpense,
    updateExpense,
    addExpenseItem,
    deleteExpenseItem
} from '../config/services'


import {
    FETCH_EXPENSES,
    RETURN_EXPENSES,
    ADD_EXPENSE,
    DELETE_EXPENSE,
    UPDATE_EXPENSE,

    ADD_EXPENSE_ITEM,
    DELETE_EXPENSE_ITEM,

} from '../actions'

import * as util from '../helpers'



function* fetchInitialExpenses(action) {

    const result = yield call(fetchExpenses) // YOU CAN PASS ARGUMENTS HERE LIKE :  call( fn , args )

    yield put({ type: RETURN_EXPENSES, result }); // CALL ANOTHER ACTION
}


function* addRealmExpenses(action) {

    const newExpense = {
        id: action.id,
        name: action.name,
        collection: action.collection,
        createdAt: action.createdAt,
        updatedAt: action.updatedAt
    }

    addExpense(newExpense);

}


function* deleteRealmExpense(action) {
    deleteExpense(action.id);
}


function* addRealmExpenseItem(action) {

    // const expenses = yield select(state => state.expenses);  // 'SELECT' HAS ACCESS TO REDUX STATE, PRETTY NEAT HUH

    addExpenseItem(action.id, action.collection)

}

function* deleteRealmExpenseItem(action) {

    deleteExpenseItem(action.itemId)

}


// LISTENERS
export default function* rootSaga() {

    // LISTEN AND MAKE SIDE-EFFECTS^
    yield takeEvery(FETCH_EXPENSES, fetchInitialExpenses);
    yield takeEvery(ADD_EXPENSE, addRealmExpenses);
    yield takeEvery(DELETE_EXPENSE, deleteRealmExpense);
    // yield takeEvery(UPDATE_EXPENSE, updateExpenses);


    yield takeEvery(ADD_EXPENSE_ITEM, addRealmExpenseItem);
    yield takeEvery(DELETE_EXPENSE_ITEM, deleteRealmExpenseItem);


}