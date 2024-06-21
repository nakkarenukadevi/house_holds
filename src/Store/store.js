import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./ProductSlice";

const Store = configureStore({
    reducer: {
        items: productReducer

    }
});
export default Store