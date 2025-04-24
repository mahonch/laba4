import Category from './category.model.js';

const categories = [];

const getAll = async () => categories;

const getById = async (id) => categories.find(category => category.id === id);

const getByMenuId = async (menuId) => categories.filter(category => category.menuId === menuId);

const create = async (categoryData) => {
  const category = new Category(categoryData);
  categories.push(category);
  return category;
};

const update = async (id, categoryData) => {
  const index = categories.findIndex(category => category.id === id);
  if (index !== -1) {
    categories[index] = { ...categories[index], ...categoryData };
    return categories[index];
  }
  return null;
};

const remove = async (id) => {
  const index = categories.findIndex(category => category.id === id);
  if (index !== -1) {
    return categories.splice(index, 1)[0];
  }
  return null;
};

export { getAll, getById, getByMenuId, create, update, remove };