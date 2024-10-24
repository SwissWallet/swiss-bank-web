import { createSlice } from "@reduxjs/toolkit";

interface initialStateRoutes {
    value: boolean
}

const initialState: initialStateRoutes = {
    value: false
}

const accountSlice = createSlice({
    name: "account",
    initialState,
    reducers: {
        setAccount: (state, action) => {
            state.value = action.payload;
        }
    }
})

export const { setAccount } = accountSlice.actions;
export default accountSlice.reducer;