import {
    FETCH_EXPENSES,
    RETURN_EXPENSES,
    ADD_EXPENSE,
    DELETE_EXPENSE
} from '../actions'

import * as util from '../helpers'


const todos = (state = [], action) => {
    switch (action.type) {

        case RETURN_EXPENSES:
            
            return action.result

        case ADD_EXPENSE:
            return [
                {
                    id: action.id,
                    name: action.name,
                    collection: action.collection
                },
                ...state
            ]
        case DELETE_EXPENSE:
            return state.filter(exp => exp.id !== action.id)
            


        default:
            return state
    }
}

export default todos