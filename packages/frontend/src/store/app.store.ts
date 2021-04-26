import { createStore } from 'redux';
import { initialState } from './initial-state.store';
import { rootReducer } from './root-reducer.store';

// redux sagas is a middleware that we apply to the store
export const store = createStore(rootReducer, initialState);
