import * as categoriesRepo from './category.memory.repository.js';
import * as dishesRepo from '../dishes/dish.memory.repository.js';
import * as menusService from '../menus/menu.service.js';

const getAll = async () => categoriesRepo.getAll();

const getById = async (id) => categoriesRepo.getById(id);

const getByMenuId = async (menuId) => categoriesRepo.getByMenuId(menuId);

const create = async (categoryData) => {
  const { menuId } = categoryData;
  const menu = await menusService.getById(menuId);
  if (!menu) {
    throw new Error('Menu not found');
  }
  return categoriesRepo.create(categoryData);
};

const update = async (id, categoryData) => categoriesRepo.update(id, categoryData);

const remove = async (id) => {
  const category = await categoriesRepo.remove(id);
  if (category) {
    await dishesRepo.removeByCategoryId(id);
  }
  return category;
};

export { getAll, getById, getByMenuId, create, update, remove };