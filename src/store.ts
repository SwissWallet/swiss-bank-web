import { configureStore } from "@reduxjs/toolkit";
import User from "../src/features/user-slice";

export const store = configureStore({
    reducer: {
        user: User,
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

