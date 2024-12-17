import { configureStore } from "@reduxjs/toolkit";
import { LoaderReducer } from "../redux/LoaderReducer";


export const store = configureStore({
    reducer:{
        Loader: LoaderReducer
    }
})