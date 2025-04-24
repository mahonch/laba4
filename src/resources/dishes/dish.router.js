import { Router } from 'express';
import Dish from './dish.model.js';
import * as dishesService from './dish.service.js';
import * as categoriesService from '../categories/category.service.js';

const router = Router();

// GET /dishes - Получить все блюда
router.route('/').get(async (req, res) => {
  const dishes = await dishesService.getAll();
  res.json(dishes.map(Dish.toResponse));
});

// GET /dishes/:dishId - Получить блюдо по ID
router.route('/:dishId').get(async (req, res) => {
  const dish = await dishesService.getById(req.params.dishId);
  if (dish) {
    res.json(Dish.toResponse(dish));
  } else {
    res.status(404).json({ error: 'Dish not found' });
  }
});

// POST /dishes - Создать блюдо
router.route('/').post(async (req, res) => {
  const { categoryId } = req.body;
  const category = await categoriesService.getById(categoryId);
  if (!category) {
    return res.status(404).json({ error: 'Category not found' });
  }
  const dish = await dishesService.create({ ...req.body, categoryId });
  res.status(201).json(Dish.toResponse(dish));
});

// PUT /dishes/:dishId - Обновить блюдо
router.route('/:dishId').put(async (req, res) => {
  const dish = await dishesService.update(req.params.dishId, req.body);
  if (dish) {
    res.json(Dish.toResponse(dish));
  } else {
    res.status(404).json({ error: 'Dish not found' });
  }
});

// DELETE /dishes/:dishId - Удалить блюдо
router.route('/:dishId').delete(async (req, res) => {
  const dish = await dishesService.remove(req.params.dishId);
  if (dish) {
    res.status(204).send();
  } else {
    res.status(404).json({ error: 'Dish not found' });
  }
});

export default router;