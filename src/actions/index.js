export const FETCH_EXPENSES = 'FETCH_EXPENSES'
export const RETURN_EXPENSES = 'RETURN_EXPENSES'
export const ADD_EXPENSE = 'ADD_EXPENSE'
export const DELETE_EXPENSE = 'DELETE_EXPENSE'


export const fetchExpenses = () => {
    return {
        type: FETCH_EXPENSES
    }
}


export const returnExpenses = (expenses) => {
    return {
        type: RETURN_EXPENSES,
        expenses
    }
}


export const addExpense = (id, name, collection = []) => {
    return {
        type: ADD_EXPENSE,
        id, name, collection
    }
}

export const deleteExpense = (id) => {
    return {
        type: DELETE_EXPENSE,
        id
    }
}