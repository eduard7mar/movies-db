import { createStore } from "redux";

import rootReducer from "./reducers";

function configureStore() {
  const store = createStore(rootReducer);
  return store;
}

const store = configureStore();

export type RootState = ReturnType<typeof store.getState>;

export default store;
