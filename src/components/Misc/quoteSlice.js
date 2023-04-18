import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  quotes: [],
};

export const quoteSlice = createSlice({
  name: "quotes",
  initialState,
  reducers: {
    addquote: (state, action) => {
      const existingQuote = state.quotes.find(
        (quote) => quote.id === action.payload.id
      );
      if (!existingQuote) {
        state.quotes.push(action.payload);
      }
    },
    deletequote: (state, action) => {
      state.quotes = state.quotes.filter(
        (quote) => quote.id !== action.payload
      );
    },
  },
});
// tu bookmark add kerne se phele check ker if exists or not

export const { addquote, deletequote } = quoteSlice.actions;
export default quoteSlice.reducer;
