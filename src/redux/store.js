import { configureStore } from '@reduxjs/toolkit';
import ReduxThunk from 'redux-thunk';

import rootReducer from './rootReducer';

const middleware = [ReduxThunk];

const store = configureStore({
  reducer: rootReducer,
  middleware,
});

export default store;
