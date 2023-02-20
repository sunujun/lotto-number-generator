import { applyMiddleware, combineReducers, legacy_createStore as createStore } from 'redux';
import logger from 'redux-logger';
import { lottoNumberReducers } from '../reducers/lottoNumbers';

const rootReducer = combineReducers({
    numbers: lottoNumberReducers,
});

export type RootState = ReturnType<typeof rootReducer>;

const store = createStore(rootReducer, applyMiddleware(logger));

export default store;
