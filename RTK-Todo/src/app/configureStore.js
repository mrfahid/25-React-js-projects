import { configureStore } from "@reduxjs/toolkit"
import { persistReducer } from "redux-persist"
import storage from "redux-persist/lib/storage"


import todoReducer from "../features/todo/todoSlice"
import persistStore from "redux-persist/es/persistStore"

const persistConfig = {
  key: 'root',
  storage,
  blacklist: []
}

const persistedReducer  = persistReducer(persistConfig, todoReducer)

export const store = configureStore({
  reducer: persistedReducer
})

export const persistor = persistStore(store);