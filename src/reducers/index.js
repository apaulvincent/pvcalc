import { combineReducers } from 'redux';

import expenses from './expenses';
import nav from './nav';


const rootReducer = combineReducers({ nav, expenses });

export default rootReducer;
