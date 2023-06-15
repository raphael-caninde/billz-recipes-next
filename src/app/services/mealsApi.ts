import { axiosiInstance } from './api';

export async function getSearchFoods(food = '') {
  const foods = await axiosiInstance.get(`/search.php?s=${food}`);

  return foods.data;
}

export async function getCategory() {
  const category = await axiosiInstance.get('/categories.php');

  return category.data;
}

export async function getCategoryFilter(category: string) {
  const filterCategory = await axiosiInstance.get(`/filter.php?c=${category}`);

  return filterCategory.data;
}
