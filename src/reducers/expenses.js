import {
    FETCH_EXPENSES,
    RETURN_EXPENSES,
    ADD_EXPENSE,
    DELETE_EXPENSE,
    UPDATE_EXPENSE,

    ADD_EXPENSE_ITEM,
    DELETE_EXPENSE_ITEM
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
                    collection: action.collection,
                    createdAt: action.createdAt,
                    updatedAt: action.updatedAt
                },
                ...state
            ]


        case DELETE_EXPENSE:
            return state.filter(exp => exp.id !== action.id)


        case UPDATE_EXPENSE:

            return state;


        case ADD_EXPENSE_ITEM:

            const newExp = state.map(exp => {

                if (exp.id == action.id) {

                    return {
                        id: action.id,
                        name: exp.name,
                        collection: [action.collection, ...exp.collection],
                        createdAt: exp.createdAt,
                        updatedAt: exp.updatedAt
                    }

                }

                return exp;

            })

            return newExp;

        case DELETE_EXPENSE_ITEM:

            const newExp2 = state.map(exp => {

                if (exp.id == action.id) {

                    return {
                        id: action.id,
                        name: exp.name,
                        collection: exp.collection.filter(e => e.id != action.itemId),
                        createdAt: exp.createdAt,
                        updatedAt: exp.updatedAt
                    }

                }

                return exp;

            })

            return newExp2;

        default:
            return state
    }
}

export default todos