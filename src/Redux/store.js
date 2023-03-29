import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import logger from "redux-logger";
import userReducer from '../Redux/Slice/UserSlice'; 

const persistConfig = {
    key: 'root2',
    version: 1,
    storage: storage,
    blacklist: []
  }

  const rootReducer = combineReducers({
    user: userReducer
  });
  
  const persistedReducer = persistReducer(persistConfig, rootReducer)
  
  const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }).concat(logger),
  })

  export default store;