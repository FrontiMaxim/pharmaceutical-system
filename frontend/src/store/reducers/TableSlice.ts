import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ITable } from "../../interfaces/ITable";

const initialState: ITable = {
    caption: '',
    data: []
};

export const tableSlice = createSlice({
    name: 'table',
    initialState,
    reducers: {
        update(state: ITable, action: PayloadAction<ITable>) {
            state.data = action.payload.data
            state.caption = action.payload.caption
        }
    }
});

export default tableSlice.reducer;