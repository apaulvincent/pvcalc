export const FETCH_EXPENSES = 'FETCH_EXPENSES'
export const RETURN_EXPENSES = 'RETURN_EXPENSES'
export const ADD_EXPENSE = 'ADD_EXPENSE'
export const DELETE_EXPENSE = 'DELETE_EXPENSE'
export const UPDATE_EXPENSE = 'UPDATE_EXPENSE'
export const ADD_EXPENSE_ITEM = 'ADD_EXPENSE_ITEM'
export const DELETE_EXPENSE_ITEM = 'DELETE_EXPENSE_ITEM'


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


export const addExpense = (id, name, collection = [], createdAt, updatedAt) => {
    return {
        type: ADD_EXPENSE,
        id, name, collection, createdAt, updatedAt
    }
}

export const deleteExpense = (id) => {
    return {
        type: DELETE_EXPENSE,
        id
    }
}

export const updateExpense = (id, name, updatedAt) => {
    return {
        type: UPDATE_EXPENSE,
        id, name, updatedAt
    }
}




// EXPENSE ITEM ACTIONS

export const addExpenseItem = (id, collection) => {
    return {
        type: ADD_EXPENSE_ITEM,
        id, collection
    }
}

export const deleteExpenseItem = (id, itemId) => {
    return {
        type: DELETE_EXPENSE_ITEM,
        id, itemId
    }
}