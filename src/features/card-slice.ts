import { createSlice } from "@reduxjs/toolkit";

interface initialStateRoutes {
    value: boolean
}

const initialState: initialStateRoutes = {
    value: false
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