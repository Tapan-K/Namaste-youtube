import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {
    searchResults: [], // new state property
  },
  reducers: {
    cacheResults: (state, action) => {
      state = Object.assign(state, action.payload);
    },
    // new code
    updateSearchResults: (state, action) => {
      state.searchResults = action.payload; // new reducer
    },
  },
});

export const { cacheResults, updateSearchResults } = searchSlice.actions;
export default searchSlice.reducer;
