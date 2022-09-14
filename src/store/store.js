import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { compose, legacy_createStore as createStore, applyMiddleware, combineReducers } from "redux";
import logger from "redux-logger";
import { rootReducer } from "./root-reducer";
import thunk from "redux-thunk";

const composeEnhancer =
  (process.env.NODE_ENV !== 'production' &&
    window &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const middleWares = [process.env.NODE_ENV === 'development' && logger,
  thunk,
].filter(
    Boolean
);

const persistConfig = { 
    key: 'root',
    storage,
    blacklist: ['movies', 'options']
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const composedEnhancers = composeEnhancer(applyMiddleware(...middleWares));

export const store = createStore(
    persistedReducer,
    undefined, 
    composedEnhancers
)

export const persistor = persistStore(store)