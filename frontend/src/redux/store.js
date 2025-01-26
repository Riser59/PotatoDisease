import { configureStore } from "@reduxjs/toolkit";
import { counterSlice } from "../features/counterSlice";
import { fileSlice } from "../features/fileSlice";

export default configureStore({
    reducer: {
        counter: counterSlice.reducer,
        file: fileSlice.reducer,
    },
});