import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: {}
}

const cardSlice = createSlice({
    name: "card",
    initialState,
    reducers: {
        setCard: (state, action) => {
            state.value = action.payload;
        }
    }
})

export const { setCard } = cardSlice.actions;
export default cardSlice.reducer;