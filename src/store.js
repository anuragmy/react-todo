import { combineReducers, createStore, applyMiddleware } from 'redux';
import { persistReducer } from 'redux-persist';
// import logger from 'redux-logger'
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2'
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { todos } from './reducer';

const reducers = {
  todos,
}

const persistConfig = {
  key: 'root',
  storage,
  stateReconciler: autoMergeLevel2
}

const rootReducers = combineReducers(reducers);
const persistedReducer = persistReducer(persistConfig, rootReducers)
export const store = createStore(persistedReducer, composeWithDevTools(applyMiddleware(thunk)));