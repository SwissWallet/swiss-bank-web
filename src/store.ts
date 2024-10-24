import { configureStore } from "@reduxjs/toolkit";
import User from "../src/features/user-slice";
import Account from "../src/features/account-slice";
import Card from "../src/features/card-slice";

export const store = configureStore({
    reducer: {
        user: User,
        account: Account,
        card: Card
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

