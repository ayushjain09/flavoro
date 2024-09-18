import { createSlice } from "@reduxjs/toolkit";

const SearchSlice = createSlice({
	name: "search",
	initialState: {
		searchTerm: "",
	},
	reducers: {
		updateSearchTerm(state, action) {
			state.searchTerm = action.payload;
		},
	},
});

export const { updateSearchTerm } = SearchSlice.actions;
export default SearchSlice.reducer;
