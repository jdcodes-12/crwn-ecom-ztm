import { createSelector } from 'reselect';

export const selectCategoryReducer = (state) => state.categories;

export const selectCategories = createSelector(
  [selectCategoryReducer],
  (categorySlice) => categorySlice.categories
);

export const selectCategoriesMap = createSelector(
  [selectCategories],
  (categories) => categories.reduce((accumulator, category) => {
    const { items, title } = category;
    accumulator[title.toLowerCase()] = items;
    return accumulator;
  }, {})
);