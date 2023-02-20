import AsyncStorage from '@react-native-async-storage/async-storage';
import { applyMiddleware, combineReducers, legacy_createStore as createStore } from 'redux';
import logger from 'redux-logger';
import { persistReducer } from 'redux-persist';
import persistStore from 'redux-persist/es/persistStore';
import hardSet from 'redux-persist/es/stateReconciler/hardSet';
import { lottoNumberReducers, LottoNumbersAction } from '../reducers/lottoNumbers';

const rootReducer = combineReducers({
    numbers: lottoNumberReducers,
});

export type RootState = ReturnType<typeof rootReducer>;

const persistedReducer = persistReducer<RootState, LottoNumbersAction>(
    {
        key: 'root',
        storage: AsyncStorage,
        stateReconciler: hardSet,
    },
    rootReducer,
);

export const store = createStore(persistedReducer, applyMiddleware(logger));
export const persistor = persistStore(store);
