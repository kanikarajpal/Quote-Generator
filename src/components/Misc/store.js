import { configureStore } from "@reduxjs/toolkit";
import quotesReducer from "./quoteSlice";

export const store = configureStore({
	reducer: {
		quotes: quotesReducer,
	},
});
