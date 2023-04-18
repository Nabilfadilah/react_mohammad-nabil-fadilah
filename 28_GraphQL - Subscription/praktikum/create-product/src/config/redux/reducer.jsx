import { combineReducers } from "@reduxjs/toolkit";
import ProductSlice from "../product/ProductSlice";


const reducer = combineReducers({
    product: ProductSlice.reducer,
});

export default reducer;