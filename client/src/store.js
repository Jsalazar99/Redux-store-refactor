import { createStore } from 'redux';
import rootReducer from './utils/reducers';

const store = createStore(rootReducer);

export default store;
