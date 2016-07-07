import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import analysis from './analysis'

const rootReducer = combineReducers({analysis, routing: routerReducer})

export default rootReducer;