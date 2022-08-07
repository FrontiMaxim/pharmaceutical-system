import { combineReducers, configureStore } from "@reduxjs/toolkit";
import tableReducer from './reducers/TableSlice';

const rootReducer = combineReducers({
    tableReducer
});

export const setupStore = () => {
    return configureStore ({
        reducer: rootReducer
    });
}

export type RootState = ReturnType<typeof rootReducer>;
export type AppStroe = ReturnType<typeof setupStore>;
export type AppDispatch = AppStroe['dispatch'];