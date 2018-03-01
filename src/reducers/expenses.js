import {
    FETCH_INITIAL_DATA,
    RETURN_EXPENSES,
} from '../actions'


const todos = (state = [], action) => {
    switch (action.type) {

        case FETCH_INITIAL_DATA:
            return state

        case RETURN_EXPENSES:
            return state

        default:
            return state
    }
}

export default todos