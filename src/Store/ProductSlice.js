
import { createSlice } from '@reduxjs/toolkit'
const ProductSlice = createSlice({
    name: "items",
    initialState: { item: [] },
    reducers: {
        initialData: (state, action) => {
            state.item = action.payload

        }

    }
});
export const { initialData } = ProductSlice.actions
export default ProductSlice.reducer;
