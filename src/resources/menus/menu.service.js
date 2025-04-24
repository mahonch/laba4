import * as menusRepo from './menu.memory.repository.js';
import * as categoriesRepo from '../categories/category.memory.repository.js';
import * as dishesRepo from '../dishes/dish.memory.repository.js';

const getAll = async () => menusRepo.getAll();

const getById = async (id) => menusRepo.getById(id);

const create = async (menuData) => menusRepo.create(menuData);

const update = async (id, menuData) => menusRepo.update(id, menuData);

const remove = async (id) => {
  const menu = await menusRepo.remove(id);
  if (menu) {
    const categories = await categoriesRepo.getAll();
    const categoriesToRemove = categories.filter(category => category.menuId === id);
    // Используем Promise.all и map вместо цикла for...of
    await Promise.all(
      categoriesToRemove.map(async (category) => {
        await categoriesRepo.remove(category.id);
        await dishesRepo.removeByCategoryId(category.id);
      })
    );
  }
  return menu;
};

export { getAll, getById, create, update, remove };