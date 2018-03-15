import Realm from 'realm'
import * as util from '../helpers'

const EXPENSES_SCHEMA = 'Expenses'
const EXPENSE_ITEM_SCHEMA = 'Expense'


export const ExpensesSchema = {
    name: EXPENSES_SCHEMA,
    primaryKey: 'id',
    properties: {
        id: { type: 'string', indexed: true },
        name: 'string',
        createdAt: 'date',
        updatedAt: 'date',
        collection: { type: 'list', objectType: EXPENSE_ITEM_SCHEMA }
    }
}

export const ExpenseItemSchema = {
    name: EXPENSE_ITEM_SCHEMA,
    primaryKey: 'id',
    properties: {
        id: { type: 'string', indexed: true },
        name: 'string',
        amount: 'int',
        createdAt: 'date',
        updatedAt: 'date',
    }
}

const dbOptions = {
    path: 'expensesApp.realm',
    schema: [ExpensesSchema, ExpenseItemSchema],
    schemaVersion: 2
}

export const fetchExpenses = () => new Promise((resolve, reject) => {
    Realm.open(dbOptions).then(realm => {

        let expenses = realm.objects(EXPENSES_SCHEMA);

        let sortedExpenses = expenses.sorted('updatedAt', true)

        resolve(sortedExpenses);

    }).catch((error) => reject(error))
})



export const insertExpense = (expense) => {
    Realm.open(dbOptions).then(realm => {

        try {

            realm.write(() => {
                realm.create(EXPENSES_SCHEMA, expense);
            })

        } catch (e) {
            alert(e)
        }

    }).catch((error) => reject(error))
}






export const updateExpense = (id, name, collection, updatedAt) => {

    Realm.open(dbOptions).then(realm => {

        try {

            realm.write(() => {

                let parent = realm.objectForPrimaryKey(EXPENSES_SCHEMA, id);

                parent.name = name
                parent.updatedAt = updatedAt
                parent.collection.push(collection)

            })

        } catch (e) {
            alert(e)
        }


    }).catch(error => alert(error))

}



export const addExpenseItem = (parentId, collection) => {

    Realm.open(dbOptions).then(realm => {

        try {

            realm.write(() => {

                let parent = realm.objectForPrimaryKey(EXPENSES_SCHEMA, parentId);

                parent.collection.push(collection)

            })

        } catch (e) {
            alert(e)
        }


    }).catch(error => alert(error))

}


export const deleteExpenseItem = (id) => {

    Realm.open(dbOptions).then(realm => {

        try {

            realm.write(() => {

                let item = realm.objectForPrimaryKey(EXPENSE_ITEM_SCHEMA, id);

                realm.delete(item);

            })

        } catch (e) {
            alert(e)
        }


    }).catch(error => alert(error))

}





export const deleteExpense = (id) => {

    Realm.open(dbOptions).then(realm => {

        try {

            realm.write(() => {

                let expense = realm.objectForPrimaryKey(EXPENSES_SCHEMA, id);

                realm.delete(expense);

            })

        } catch (e) {
            alert(e)
        }

    }).catch((error) => reject(error))

}


// EXPENSE ITEM SERVICES


export const fetchExpenseItem = () => new Promise((resolve, reject) => {
    Realm.open(dbOptions).then(realm => {

        let expense = realm.objects(EXPENSE_ITEM_SCHEMA);
        resolve(expense);

    }).catch((error) => reject(error))
})









// CLEAR EVERYTHING...
export const clearExpenses = () => new Promise((resolve, renject) => {

    Realm.open(dbOptions).then(realm => {
        realm.write(() => {

            let expenses = realm.objects(EXPENSES_SCHEMA);
            let expense = realm.objects(EXPENSE_ITEM_SCHEMA);

            realm.delete(expenses);
            realm.delete(expense);
            resolve()
        })
    }).catch((error) => reject(error))

})


// const goo = util.guid();

// const gtt = {
//     id: goo,
//     name: 'Gas',
//     createdAt: new Date(),
//     updatedAt: new Date()
// };

// insertExpense(gtt)

// const gtt2 = {
//     id: util.guid(),
//     name: 'Gas',
//     amount: 4000,
//     createdAt: new Date(),
//     updatedAt: new Date()
// };

// insertExpenseItem(goo, gtt2)

// clearExpenses()



export default new Realm(dbOptions);