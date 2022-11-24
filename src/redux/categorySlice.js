import { createSlice } from '@reduxjs/toolkit';

export const categorySlice = createSlice({
    name: 'categories',
    initialState: {
        selectedCategory: 'ALL'
        },
    reducers: {
        filteredCategory: (state, action) => {
            state.selectedCategory = action.payload
        }
    }
});

export const getSelectedCategory = state => state.categories.selectedCategory;
export const { filteredCategory } = categorySlice.actions;
export default categorySlice.reducer;