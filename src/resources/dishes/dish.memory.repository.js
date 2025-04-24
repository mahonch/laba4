// resources/dishes/dish.memory.repository.js
import Dish from './dish.model.js';

const dishes = [];

const getAll = async () => dishes;

const getById = async (id) => dishes.find(dish => dish.id === id);

const getByCategoryId = async (categoryId) => dishes.filter(dish => dish.categoryId === categoryId);

const create = async (dishData) => {
  const dish = new Dish(dishData);
  dishes.push(dish);
  return dish;
};

const update = async (id, dishData) => {
  const index = dishes.findIndex(dish => dish.id === id);
  if (index !== -1) {
    dishes[index] = { ...dishes[index], ...dishData };
    return dishes[index];
  }
  return null;
};

const remove = async (id) => {
  const index = dishes.findIndex(dish => dish.id === id);
  if (index !== -1) {
    return dishes.splice(index, 1)[0];
  }
  return null;
};

const removeByCategoryId = async (categoryId) => {
  const filteredDishes = dishes.filter(dish => dish.categoryId !== categoryId);
  const removedCount = dishes.length - filteredDishes.length;
  dishes.length = 0;
  dishes.push(...filteredDishes);
  return removedCount;
};

export { getAll, getById, getByCategoryId, create, update, remove, removeByCategoryId };