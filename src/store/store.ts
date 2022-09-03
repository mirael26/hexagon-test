import { configureStore } from '@reduxjs/toolkit';

import { userReducer } from './reducers/user-reducer';
import { dataReducer } from './reducers/data-reducer';

const saveToLocalStorage = (state: RootState) => {
  try {
    localStorage.setItem('state', JSON.stringify(state));
  } catch (e) {
    console.error(e);
  }
};

const loadFromLocalStorage = () => {
  try {
    const stateStr = localStorage.getItem('state');
    return stateStr ? JSON.parse(stateStr) : undefined;
  } catch (e) {
    console.error(e);
    return undefined;
  }
};

const store = configureStore({
  reducer: {user: userReducer, data: dataReducer},
  preloadedState: loadFromLocalStorage(),
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;

store.subscribe(() => {
  saveToLocalStorage(store.getState());
});

export default store;