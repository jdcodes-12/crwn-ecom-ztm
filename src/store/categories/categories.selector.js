export const selectCategoriesMap = (state) => state.categories.categories
  .reduce((accumulator, category) => {
    const { items, title } = category;
    accumulator[title.toLowerCase()] = items;
    return accumulator;
  }, {});