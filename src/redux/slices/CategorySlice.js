import { createSlice } from "@reduxjs/toolkit";

const CategorySlice = createSlice({
	name: "category",
	initialState: {
		categories: ["All"],
		selectedCategory: "All",
	},
	reducers: {
		initialiseCategories: (state, action) => {
			const calculatedCategories = [
				...new Set(action.payload.map((food) => food.category)),
			];

			state.categories = [state.categories[0], ...calculatedCategories];
			state.selectedCategory = state.categories[0];
		},
		setSelectedCategory: (state, action) => {
			state.selectedCategory = action.payload;
		},
	},
});

export const { initialiseCategories, setSelectedCategory } =
	CategorySlice.actions;
export default CategorySlice.reducer;
