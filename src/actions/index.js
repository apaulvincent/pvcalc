export const FETCH_INITIAL_DATA = 'FETCH_INITIAL_DATA'
export const RETURN_EXPENSES = 'RETURN_EXPENSES'



export const fetchExpenses = () => {
    return {
        type: FETCH_INITIAL_DATA
    }
}


export const returnExpenses = (expenses) => {
    return {
        type: RETURN_EXPENSES,
        expenses
    }
}