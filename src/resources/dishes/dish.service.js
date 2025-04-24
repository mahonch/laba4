// resources/dishes/dish.service.js
import * as dishesRepo from './dish.memory.repository.js';

const getAll = async () => dishesRepo.getAll();

const getById = async (id) => dishesRepo.getById(id);

const getByCategoryId = async (categoryId) => dishesRepo.getByCategoryId(categoryId);

const create = async (dishData) => dishesRepo.create(dishData);

const update = async (id, dishData) => dishesRepo.update(id, dishData);

const remove = async (id) => dishesRepo.remove(id);

export { getAll, getById, getByCategoryId, create, update, remove };